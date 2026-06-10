import React, { createContext, useCallback, useContext, useState } from "react";

export interface ContactDraft {
  message?: string;
  projectType?: string;
  selectedProjectInterest?: string;
}

interface ContactDraftContextValue {
  draft: ContactDraft;
  setDraft: (draft: ContactDraft) => void;
  clearDraft: () => void;
}

const ContactDraftContext = createContext<ContactDraftContextValue | null>(null);

export function ContactDraftProvider({ children }: { children: React.ReactNode }) {
  const [draft, setDraftState] = useState<ContactDraft>({});

  const setDraft = useCallback((next: ContactDraft) => {
    setDraftState((prev) => ({ ...prev, ...next }));
  }, []);

  const clearDraft = useCallback(() => setDraftState({}), []);

  return (
    <ContactDraftContext.Provider value={{ draft, setDraft, clearDraft }}>
      {children}
    </ContactDraftContext.Provider>
  );
}

export function useContactDraft() {
  const ctx = useContext(ContactDraftContext);
  if (!ctx) throw new Error("useContactDraft must be used within ContactDraftProvider");
  return ctx;
}
