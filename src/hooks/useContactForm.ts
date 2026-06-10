import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { sendContactEmail, validateAttachment } from "../lib/brevo";

export function useContactForm(initial?: {
  message?: string;
  projectType?: string;
  selectedProjectInterest?: string;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(initial?.projectType ?? "lumber");
  const [message, setMessage] = useState(initial?.message ?? "");
  const [selectedProjectInterest, setSelectedProjectInterest] = useState(
    initial?.selectedProjectInterest ?? ""
  );
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const resetAlerts = () => {
    setSubmitSuccess(null);
    setSubmitError(null);
  };

  const clearAttachment = () => {
    setAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAttachmentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    resetAlerts();

    if (!file) {
      setAttachment(null);
      return;
    }

    const validationError = validateAttachment(file);
    if (validationError) {
      setSubmitError(validationError);
      clearAttachment();
      return;
    }

    setAttachment(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setSubmitError("Please provide both your name and email so we can reach you.");
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    try {
      await sendContactEmail({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        projectType: projectType.toUpperCase(),
        message: message.trim(),
        selectedProjectInterest: selectedProjectInterest || undefined,
        attachment: attachment ?? undefined,
      });

      setSubmitSuccess("Thank you! Your request has been sent to Plan Sight Estimating.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSelectedProjectInterest("");
      clearAttachment();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Please try again later.";
      console.error("Submission error:", err);
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    projectType,
    setProjectType,
    message,
    setMessage,
    selectedProjectInterest,
    setSelectedProjectInterest,
    attachment,
    fileInputRef,
    clearAttachment,
    handleAttachmentChange,
    isSubmitting,
    submitSuccess,
    submitError,
    resetAlerts,
    handleSubmit,
  };
}
