"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function LoginModal({ open, onClose }) {
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
        <form
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 text-white/80 hover:text-white text-2xl leading-none"
          >
            &times;
          </button>

          <h2 className="text-3xl font-extrabold text-white text-center mb-2">Login</h2>
          <p className="text-center text-white/70 mb-6">Welcome back! Please enter your details.</p>

          <div className="mb-5">
            <label className="block mb-2 text-sm text-white/80" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full h-12 px-4 rounded-lg bg-black/30 text-white border border-white/20 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <PasswordField />

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 text-sm text-white/80">
              <input type="checkbox" className="accent-blue-500" /> Remember me
            </label>
            <Link href="#" className="text-sm text-blue-400 hover:underline">Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-800/30 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition"
          >
            Log In
          </button>
        </form>
      </div>
    ),
    document.body
  );
}

function PasswordField() {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-6 relative">
      <label className="block mb-2 text-sm text-white/80" htmlFor="password">Password</label>
      <input
        id="password"
        type={show ? "text" : "password"}
        required
        placeholder="********"
        autoComplete="current-password"
        className="w-full h-12 px-4 pr-12 rounded-lg bg-black/30 text-white border border-white/20 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      <button
        type="button"
        onClick={() => setShow((v) => !v)}
        aria-label={show ? "Hide password" : "Show password"}
        aria-pressed={show}
        className="absolute right-3 top-[38px] text-white/80 hover:text-white text-sm"
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
