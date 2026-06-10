import { useEffect, useRef } from "react";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactSidebar } from "../components/contact/ContactSidebar";
import { useContactDraft } from "../context/ContactDraftContext";
import { PAGE_META, usePageMeta } from "../config/seo";

export function ContactPage() {
  const { draft, clearDraft } = useContactDraft();
  const draftSnapshot = useRef(draft);

  usePageMeta(PAGE_META.contact.title, PAGE_META.contact.description);

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
