"use client";

import React, { useEffect, useState } from "react";

export default function SupportForm({ onSubmitted }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    orderNumber: "",
    issueType: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [canSubmit, setCanSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (values) => {
    const e = {};
    if (!values.name.trim()) e.name = "Name is required";
    if (!values.email.trim()) e.email = "Email is required";
    else if (!emailRegex.test(values.email)) e.email = "Please enter a valid email";
    if (!values.orderNumber.trim()) e.orderNumber = "Order number is required";
    else if (!/^\d{4,}$/.test(values.orderNumber.trim())) e.orderNumber = "Enter a valid order number (numbers only)";
    if (!values.issueType.trim()) e.issueType = "Please select an issue type";
    if (!values.message.trim()) e.message = "Message cannot be empty";
    else if (values.message.trim().length < 10) e.message = "Message should be at least 10 characters";
    return e;
  };

  useEffect(() => {
    const e = validate(form);
    setErrors(e);
    setCanSubmit(Object.keys(e).length === 0);
  }, [form]);

  const setField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, orderNumber: true, issueType: true, message: true });
    const currentErrors = validate(form);
    if (Object.keys(currentErrors).length > 0) return;
    setSubmitted(true);
    onSubmitted?.(form);
    setForm({ name: "", email: "", orderNumber: "", issueType: "", message: "" });
    setTouched({});
  };

  const errorClass = (key) =>
    touched[key] && errors[key]
      ? "border-red-500 focus:ring-red-400"
      : "border-transparent focus:ring-indigo-400";

  return (
    <div className="space-y-6">
      {submitted && (
        <div className="rounded-lg border border-green-400/40 bg-green-500/10 text-green-300 px-4 py-3">
          Your request has been submitted. Our team will contact you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            className={`w-full rounded-lg bg-white/10 text-white placeholder-gray-300 px-4 py-3 outline-none border transition ${errorClass(
              "name"
            )}`}
            placeholder="Your full name"
          />
          {touched.name && errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            className={`w-full rounded-lg bg-white/10 text-white placeholder-gray-300 px-4 py-3 outline-none border transition ${errorClass(
              "email"
            )}`}
            placeholder="you@example.com"
          />
          {touched.email && errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Order Number</label>
            <input
              type="text"
              value={form.orderNumber}
              onChange={(e) => setField("orderNumber", e.target.value)}
              onBlur={() => handleBlur("orderNumber")}
              className={`w-full rounded-lg bg-white/10 text-white placeholder-gray-300 px-4 py-3 outline-none border transition ${errorClass(
                "orderNumber"
              )}`}
              placeholder="e.g., 123456"
            />
            {touched.orderNumber && errors.orderNumber && (
              <p className="text-red-400 text-sm mt-1">{errors.orderNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Issue Type</label>
            <select
              value={form.issueType}
              onChange={(e) => setField("issueType", e.target.value)}
              onBlur={() => handleBlur("issueType")}
              className={`w-full rounded-lg bg-white/10 text-white px-4 py-3 outline-none border transition ${errorClass(
                "issueType"
              )}`}
            >
              <option value="" className="text-gray-800">Select an issue</option>
              <option value="Wrong Item" className="text-gray-800">Wrong Item</option>
              <option value="Missing Item" className="text-gray-800">Missing Item</option>
              <option value="Late Delivery" className="text-gray-800">Late Delivery</option>
              <option value="Other" className="text-gray-800">Other</option>
            </select>
            {touched.issueType && errors.issueType && (
              <p className="text-red-400 text-sm mt-1">{errors.issueType}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setField("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            className={`w-full rounded-lg bg-white/10 text-white placeholder-gray-300 px-4 py-3 outline-none border transition resize-y ${errorClass(
              "message"
            )}`}
            placeholder="Describe the issue..."
          />
          {touched.message && errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={!canSubmit}
            className={`px-6 py-3 rounded-lg font-semibold transition border ${
              canSubmit
                ? "bg-white text-black hover:bg-gray-200 border-white"
                : "bg-white/20 text-white/60 cursor-not-allowed border-white/30"
            }`}
            aria-disabled={!canSubmit}
          >
            Contact Support
          </button>
        </div>
      </form>
    </div>
  );
}
