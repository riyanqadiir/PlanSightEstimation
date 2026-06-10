import { BRAND } from "../config/brand";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  selectedProjectInterest?: string;
  attachment?: File;
}

const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024;

const ALLOWED_ATTACHMENT_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/png",
  "image/jpeg",
  "image/webp",
  "application/zip",
  "application/x-zip-compressed",
]);

export function validateAttachment(file: File): string | null {
  if (file.size > MAX_ATTACHMENT_BYTES) {
    return "Attachment must be 10MB or smaller.";
  }

  if (!ALLOWED_ATTACHMENT_TYPES.has(file.type)) {
    return "Unsupported file type. Use PDF, Word, Excel, PNG, JPG, WEBP, or ZIP.";
  }

  return null;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        reject(new Error("Could not read attachment."));
        return;
      }
      const base64 = result.split(",")[1];
      if (!base64) {
        reject(new Error("Could not read attachment."));
        return;
      }
      resolve(base64);
    };
    reader.onerror = () => reject(new Error("Could not read attachment."));
    reader.readAsDataURL(file);
  });
}

export function getBrevoConfig() {
  const sender = import.meta.env.VITE_BREVO_EMAIL?.trim();
  const apiKey = import.meta.env.VITE_BREVO_API_KEY?.trim();

  if (!sender || !apiKey) {
    return null;
  }

  return { sender, apiKey };
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const config = getBrevoConfig();

  if (!config) {
    throw new Error("Email service is not configured. Add VITE_BREVO_EMAIL and VITE_BREVO_API_KEY to .env.local.");
  }

  const { name, email, phone, projectType, message, selectedProjectInterest, attachment } = payload;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeProjectType = escapeHtml(projectType || "Not specified");
  const safeMessage = escapeHtml(message || "No additional comments provided.");
  const safeInterest = selectedProjectInterest
    ? escapeHtml(`Inquiry: Similar to ${selectedProjectInterest}`)
    : "";

  const htmlContent = `
    <h2 style="font-family: sans-serif; color: #18181b;">New estimate request from ${BRAND.name}</h2>
    <p style="font-family: sans-serif; color: #3f3f46;"><strong>Name:</strong> ${safeName}</p>
    <p style="font-family: sans-serif; color: #3f3f46;"><strong>Email:</strong> ${safeEmail}</p>
    <p style="font-family: sans-serif; color: #3f3f46;"><strong>Phone:</strong> ${safePhone}</p>
    <p style="font-family: sans-serif; color: #3f3f46;"><strong>Service category:</strong> ${safeProjectType}</p>
    ${safeInterest ? `<p style="font-family: sans-serif; color: #3f3f46;"><strong>Project reference:</strong> ${safeInterest}</p>` : ""}
    ${attachment ? `<p style="font-family: sans-serif; color: #3f3f46;"><strong>Attachment:</strong> ${escapeHtml(attachment.name)}</p>` : ""}
    <p style="font-family: sans-serif; color: #3f3f46;"><strong>Message:</strong></p>
    <p style="font-family: sans-serif; color: #27272a; white-space: pre-wrap;">${safeMessage}</p>
  `;

  const brevoAttachment = attachment
    ? [
        {
          name: attachment.name,
          content: await fileToBase64(attachment),
        },
      ]
    : undefined;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": config.apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: BRAND.name, email: config.sender },
      to: [{ email: config.sender, name: BRAND.name }],
      replyTo: { email, name },
      subject: `New estimate request: ${name} (${projectType || "General"})`,
      htmlContent,
      ...(brevoAttachment ? { attachment: brevoAttachment } : {}),
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error("Brevo API error:", errText);
    throw new Error("Failed to send message. Please try again.");
  }
}
