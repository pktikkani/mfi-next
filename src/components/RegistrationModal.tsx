"use client";

import { useState, useEffect, useCallback } from "react";

type Step = "form" | "confirm" | "success";

interface FormData {
  name: string;
  address: string;
  email: string;
  phone: string;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState<FormData>({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const reset = useCallback(() => {
    setStep("form");
    setForm({ name: "", address: "", email: "", phone: "" });
  }, []);

  // Auto-close after success
  useEffect(() => {
    if (step === "success") {
      const timer = setTimeout(() => {
        onClose();
        reset();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step, onClose, reset]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);

  // Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirm");
  };

  const handleConfirm = () => {
    setStep("success");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-bg text-txt border border-border-custom placeholder:text-txt-light focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300 text-sm";
  const labelClass = "block text-sm font-medium text-txt-muted mb-1.5";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-overlay backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-card rounded-2xl w-full max-w-lg p-8 animate-fade-in-up shadow-[var(--shadow-elevated)]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-txt-light hover:text-txt hover:bg-primary-glow transition-all"
        >
          ✕
        </button>

        {/* Form step */}
        {step === "form" && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="font-heading text-2xl text-dark-teal mb-6">
              Join Online
            </h3>

            <div>
              <label className={labelClass}>Name</label>
              <input
                type="text"
                required
                placeholder="Enter Name..."
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Address (Optional)</label>
              <input
                type="text"
                placeholder="Enter Address..."
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                required
                placeholder="Enter Email..."
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Phone no</label>
              <input
                type="tel"
                required
                placeholder="Enter Phone Number..."
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-bg-elevated font-semibold rounded-xl hover:bg-primary-hover transition-all duration-300 hover:shadow-[0_0_24px_var(--c-primary-glow)] active:scale-[0.98] text-sm"
            >
              Continue
            </button>
          </form>
        )}

        {/* Confirm step */}
        {step === "confirm" && (
          <div className="text-center space-y-6 animate-fade-in-up">
            <h3 className="font-heading text-2xl text-dark-teal">Confirm</h3>
            <p className="text-txt-muted leading-relaxed">
              You will be receiving a meeting link on the email id that you
              provided.
            </p>
            <div className="space-y-3">
              <button
                onClick={handleConfirm}
                className="w-full py-3.5 bg-primary text-bg-elevated font-semibold rounded-xl hover:bg-primary-hover transition-all duration-300 hover:shadow-[0_0_24px_var(--c-primary-glow)] active:scale-[0.98] text-sm"
              >
                Confirm
              </button>
              <button
                onClick={onClose}
                className="w-full py-3.5 bg-surface text-txt-muted font-medium rounded-xl hover:bg-border-custom transition-all duration-200 text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Success step */}
        {step === "success" && (
          <div className="text-center space-y-5 animate-fade-in-up">
            {/* Checkmark */}
            <div className="w-16 h-16 mx-auto rounded-full bg-primary-glow flex items-center justify-center animate-breathe">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-heading text-2xl text-dark-teal">
              Registration successful!!
            </h3>
            <p className="text-txt-muted leading-relaxed">
              Thank you! You have successfully registered for{" "}
              <strong className="text-txt">Meditate for India.</strong> We are
              eager to host you!
            </p>
            <p className="text-txt-muted leading-relaxed">
              We have sent you an email on{" "}
              <strong className="text-txt">{form.email}</strong> that has the
              event meeting link and other required details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
