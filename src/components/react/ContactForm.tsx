import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, XClose } from "@untitledui/icons";

const subjects = [
  { value: "partnership", label: "Partnership / Investment" },
  { value: "careers", label: "Careers" },
  { value: "collaboration", label: "Collaboration / Pitch" },
  { value: "other", label: "Other" },
];

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<{ open: boolean; type: "success" | "error"; message: string }>({
    open: false,
    type: "success",
    message: "",
  });

  const closeModal = () => setModal((m) => ({ ...m, open: false }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setIsSubmitting(true);

    try {
      const data = new FormData(form);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setModal({
          open: true,
          type: "success",
          message: "Thanks! Your message has been sent. We'll get back to you soon.",
        });
        form.reset();
      } else {
        const err = await res.json().catch(() => ({}));
        setModal({
          open: true,
          type: "error",
          message: err.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setModal({
        open: true,
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-amber-500 focus:outline-none";

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit} noValidate={false}>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={100}
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={255}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-gray-700">
            Subject
          </label>
          <select id="subject" name="subject" required className={inputClass}>
            <option value="">Select a topic</option>
            {subjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            minLength={10}
            maxLength={5000}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your idea or inquiry..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-amber-600 px-6 py-4 font-bold text-white transition-colors hover:bg-amber-700 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <AnimatePresence>
        {modal.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-8 shadow-xl"
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close"
              >
                <XClose className="size-5" />
              </button>

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-50">
                  {modal.type === "success" ? (
                    <CheckCircle className="size-8 text-amber-600" />
                  ) : (
                    <XCircle className="size-8 text-red-600" />
                  )}
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {modal.type === "success" ? "Message sent!" : "Something went wrong"}
                </h3>
                <p className="mt-2 text-gray-600">{modal.message}</p>

                <button
                  type="button"
                  onClick={closeModal}
                  className={`mt-6 w-full rounded-lg px-6 py-3 font-semibold text-white transition-colors ${
                    modal.type === "success"
                      ? "bg-amber-600 hover:bg-amber-700"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {modal.type === "success" ? "Got it" : "Try again"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
