import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 p-6">
      <form className="bg-black/70 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-md flex flex-col gap-6 relative border border-white/20">
        <h2 className="text-3xl font-extrabold text-white text-center">Login</h2>

        {/* Email Field */}
        <div className="relative w-full">
          <input
            type="text"
            required
            placeholder=" "
            className="peer w-full h-14 border border-gray-500 rounded-xl px-4 pt-5 pb-2 bg-black/30 text-white placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
          <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-500 peer-focus:text-sm">
            Enter Email
          </label>
        </div>

        {/* Password Field */}
        <div className="relative w-full">
          <input
            type="password"
            required
            placeholder=" "
            className="peer w-full h-14 border border-gray-500 rounded-xl px-4 pt-5 pb-2 bg-black/30 text-white placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
          <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-500 peer-focus:text-sm">
            Enter Password
          </label>
        </div>

        <Link href="#" className="text-sm text-blue-400 hover:underline self-end">
          Forgot your password?
        </Link>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 h-14 w-full rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
