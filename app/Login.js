"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
      {/* Full-screen linear gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700" />

      <form className="relative w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {/* Close (go back) */}
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Close"
          className="absolute right-4 top-4 text-white/80 hover:text-white text-2xl leading-none"
        >
          &times;
        </button>
        <h2 className="text-3xl font-extrabold text-white text-center mb-2">Login</h2>
        <p className="text-center text-white/70 mb-6">Welcome back! Please enter your details.</p>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-white/80" htmlFor="email">Email</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            id="email"
            autoComplete="email"
            className="w-full h-12 px-4 rounded-lg bg-black/30 text-white border border-white/20 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <label className="block mb-2 text-sm text-white/80" htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="********"
            id="password"
            autoComplete="current-password"
            className="w-full h-12 px-4 pr-12 rounded-lg bg-black/30 text-white border border-white/20 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            className="absolute right-3 top-[38px] text-white/80 hover:text-white text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 text-sm text-white/80">
            <input type="checkbox" className="accent-blue-500" /> Remember me
          </label>
          <Link href="#" className="text-sm text-blue-400 hover:underline">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-800/30 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition"
        >
          Log In
        </button>

        {/* Small footer */}
        <p className="mt-4 text-center text-white/70 text-sm">
          Don’t have an account? {" "}
          <Link href="#" className="text-blue-400 hover:underline">Sign up</Link>
        </p>
      </form>
    </main>
  );
}
