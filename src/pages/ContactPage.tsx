import { useEffect, useRef } from "react";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactSidebar } from "../components/contact/ContactSidebar";
import { useContactDraft } from "../context/ContactDraftContext";

export function ContactPage() {
  const { draft, clearDraft } = useContactDraft();
  const draftSnapshot = useRef(draft);

  useEffect(() => {
    clearDraft();
  }, [clearDraft]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
      <ContactSidebar />
      <ContactForm initialDraft={draftSnapshot.current} />
    </div>
  );
}
