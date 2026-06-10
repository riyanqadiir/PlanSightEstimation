import { Mail, Paperclip, Phone, Send, User, X } from "lucide-react";
import { CLIENT_CATEGORIES, TRADE_CATEGORIES } from "../../categories";
import { ContactDraft } from "../../context/ContactDraftContext";
import { useTheme } from "../../context/ThemeContext";
import { useContactForm } from "../../hooks/useContactForm";

interface ContactFormProps {
  initialDraft?: ContactDraft;
}

export function ContactForm({ initialDraft = {} }: ContactFormProps) {
  const { themeClasses } = useTheme();

  const form = useContactForm({
    message: initialDraft.message,
    projectType: initialDraft.projectType,
    selectedProjectInterest: initialDraft.selectedProjectInterest,
  });

  return (
    <div className="lg:col-span-7">
      <div className={`rounded-2xl border ${themeClasses.card} p-5 sm:p-8 space-y-6`}>
        <div className="border-b border-zinc-500/10 pb-4 flex items-center justify-between">
          <span className="block text-sm font-bold text-amber-500">Consultation Form</span>
          <span className="text-[10px] text-zinc-400 font-mono tracking-wider">Plan Sight Estimating</span>
        </div>

        {form.submitSuccess && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 rounded-xl text-xs space-y-1 text-left">
            <span className="font-extrabold block text-sm">Submission Successful</span>
            <p>{form.submitSuccess}</p>
          </div>
        )}

        {form.submitError && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 text-rose-700 dark:text-rose-400 rounded-xl text-xs space-y-1 text-left">
            <span className="font-extrabold block text-sm">Submission Error</span>
            <p>{form.submitError}</p>
          </div>
        )}

        <form onSubmit={form.handleSubmit} className="space-y-4 text-left">
          {form.selectedProjectInterest && (
            <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-3.5 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold text-amber-600 block uppercase tracking-wider">
                  Associated Project Reference
                </span>
                <span className="text-xs font-bold text-zinc-700 dark:text-zinc-200">
                  {form.selectedProjectInterest}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  form.setSelectedProjectInterest("");
                  form.setMessage("");
                }}
                className="text-[10px] font-bold text-rose-500 hover:underline"
              >
                Reset
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-xs uppercase tracking-wider font-extrabold text-zinc-500">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => form.setName(e.target.value)}
                  placeholder="Your Name"
                  disabled={form.isSubmitting}
                  className={`w-full ${themeClasses.input} rounded-xl pl-9 pr-4 py-3 text-xs focus:ring-1 focus:outline-none`}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="block text-xs uppercase tracking-wider font-extrabold text-zinc-500">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => form.setEmail(e.target.value)}
                  placeholder="your.address@domain.com"
                  disabled={form.isSubmitting}
                  className={`w-full ${themeClasses.input} rounded-xl pl-9 pr-4 py-3 text-xs focus:ring-1 focus:outline-none`}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-xs uppercase tracking-wider font-extrabold text-zinc-500">
                Phone (Optional)
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => form.setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  disabled={form.isSubmitting}
                  className={`w-full ${themeClasses.input} rounded-xl pl-9 pr-4 py-3 text-xs focus:ring-1 focus:outline-none`}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="block text-xs uppercase tracking-wider font-extrabold text-zinc-500">
                Service Category
              </label>
              <select
                value={form.projectType}
                onChange={(e) => form.setProjectType(e.target.value)}
                disabled={form.isSubmitting}
                className={`w-full ${themeClasses.input} rounded-xl px-3 py-3 text-xs focus:ring-1 focus:outline-none font-medium`}
              >
                <optgroup label="Trade Estimating">
                  {TRADE_CATEGORIES.map((trade) => (
                    <option key={trade.id} value={trade.id}>
                      {trade.emoji} {trade.label}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Who We Serve">
                  {CLIENT_CATEGORIES.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.label}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs uppercase tracking-wider font-extrabold text-zinc-500">
              Project Description
            </label>
            <textarea
              rows={6}
              value={form.message}
              onChange={(e) => form.setMessage(e.target.value)}
              placeholder="Describe your project scope, drawings, timeline, and any specific trade or takeoff requirements."
              disabled={form.isSubmitting}
              className={`w-full ${themeClasses.input} rounded-xl px-4 py-3 text-xs focus:ring-1 focus:outline-none`}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="project-attachment"
              className="block text-xs uppercase tracking-wider font-extrabold text-zinc-500"
            >
              Attach Plans or Documents (Optional)
            </label>
            <div
              className={`rounded-xl border border-dashed px-4 py-4 space-y-3 ${themeClasses.input}`}
            >
              <label
                htmlFor="project-attachment"
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition ${
                  form.isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : `${themeClasses.outlineButton} border hover:bg-zinc-500/5`
                }`}
              >
                <Paperclip className="w-4 h-4" />
                <span>{form.attachment ? "Change File" : "Choose File"}</span>
              </label>
              <input
                ref={form.fileInputRef}
                id="project-attachment"
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp,.zip"
                disabled={form.isSubmitting}
                onChange={form.handleAttachmentChange}
                className="sr-only"
              />
              {form.attachment ? (
                <div className="flex items-center justify-between gap-3 rounded-lg bg-zinc-500/5 px-3 py-2">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold truncate">{form.attachment.name}</p>
                    <p className="text-[10px] text-zinc-500">
                      {(form.attachment.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={form.clearAttachment}
                    disabled={form.isSubmitting}
                    className="shrink-0 p-1 rounded-md text-zinc-500 hover:text-rose-500 hover:bg-rose-500/10 transition"
                    aria-label="Remove attachment"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <p className="text-[10px] text-zinc-500 leading-relaxed">
                  PDF, Word, Excel, PNG, JPG, WEBP, or ZIP. Max 10MB.
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={form.isSubmitting}
            className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition ${
              form.isSubmitting ? "bg-zinc-700 text-zinc-400 cursor-not-allowed" : themeClasses.accentButton
            }`}
          >
            <Send className="w-4 h-4" />
            <span>{form.isSubmitting ? "Sending..." : "Send Request to Plan Sight Estimating"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
