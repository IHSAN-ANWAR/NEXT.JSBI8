"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import SupportForm from "./SupportForm";

export default function SupportModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Close on Esc and lock scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    (
      <div
        className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-md flex items-center justify-center"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] text-white"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 text-white/80 hover:text-white text-2xl leading-none"
          >
            &times;
          </button>

          <h2 className="text-3xl font-extrabold text-white mb-2">Contact Support</h2>
          <p className="text-white/80 mb-6">Report order issues or wrong deliveries. Our team will reach out shortly.</p>

          <SupportForm onSubmitted={() => { /* keep modal open to show success banner */ }} />
        </div>
      </div>
    ),
    document.body
  );
}
