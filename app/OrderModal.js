"use client";

import { createPortal } from "react-dom";
import { useEffect, useMemo, useState } from "react";
import { menuItems } from "./menuData";

export default function OrderModal({ open, onClose, preselectItemId }) {
  const [mounted, setMounted] = useState(false);
  const [cart, setCart] = useState([]); // [{id, qty}]
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    instructions: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const itemsById = useMemo(() => Object.fromEntries(menuItems.map(i => [i.id, i])), []);

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

  // Preselect item when opened
  useEffect(() => {
    if (!open || !preselectItemId) return;
    addToCart(preselectItemId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, preselectItemId]);

  const addToCart = (id) => {
    setCart((prev) => {
      const found = prev.find((it) => it.id === id);
      if (found) return prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it));
      return [...prev, { id, qty: 1 }];
    });
  };
  const decQty = (id) => {
    setCart((prev) => prev
      .map((it) => (it.id === id ? { ...it, qty: it.qty - 1 } : it))
      .filter((it) => it.qty > 0));
  };
  const removeItem = (id) => setCart((prev) => prev.filter((it) => it.id !== id));

  const cartTotal = useMemo(() => {
    const toNumber = (price) => Number(String(price).replace(/[^0-9.]/g, "")) || 0;
    return cart.reduce((sum, it) => sum + toNumber(itemsById[it.id]?.price) * it.qty, 0);
  }, [cart, itemsById]);

  const postalOk = /^[A-Za-z0-9\-\s]{3,10}$/.test(customer.postalCode.trim());
  const phoneOk = /^\+?[0-9\s-]{7,}$/.test(customer.phone.trim());
  const canPlace = cart.length > 0
    && customer.name.trim()
    && phoneOk
    && customer.address1.trim()
    && customer.city.trim()
    && postalOk;

  const placeOrder = (e) => {
    e.preventDefault();
    if (!canPlace) return;
    setSubmitted(true);
    // Here you could send to backend
    // fetch('/api/order', { method: 'POST', body: JSON.stringify({ cart, customer }) })
  };

  if (!mounted || !open) return null;

  return createPortal(
    (
      <div
        className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-md flex items-center justify-center"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl rounded-2xl bg-[#0b1020]/95 text-white border border-white/15 p-6 shadow-2xl"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-3 text-white/80 hover:text-white text-2xl"
          >
            &times;
          </button>

          <h2 className="text-3xl font-bold mb-1">Order Food</h2>
          <p className="text-white/70 mb-5">Select items, review your cart, and enter delivery details.</p>

          {submitted && (
            <div className="mb-4 rounded-lg border border-green-400/40 bg-green-500/10 text-green-300 px-4 py-3">
              Your order has been placed! We are preparing your food. You will receive updates soon.
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Menu list */}
            <div className="lg:col-span-2 space-y-4 max-h-[60vh] overflow-auto pr-1">
              {menuItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-white/70 line-clamp-2">{item.desc}</p>
                    <p className="text-rose-300 font-bold mt-1">{item.price}</p>
                  </div>
                  <button
                    className="px-4 py-2 rounded-lg border border-white/40 hover:bg-white hover:text-black transition"
                    onClick={() => addToCart(item.id)}
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>

            {/* Cart + address */}
            <form onSubmit={placeOrder} className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">Your Cart</h3>
                {cart.length === 0 ? (
                  <p className="text-white/60">No items yet. Add from the menu.</p>
                ) : (
                  <ul className="space-y-3">
                    {cart.map((it) => (
                      <li key={it.id} className="flex items-center justify-between gap-2">
                        <span className="flex-1">{itemsById[it.id]?.name}</span>
                        <div className="flex items-center gap-2">
                          <button type="button" onClick={() => decQty(it.id)} className="px-2 py-1 border rounded">-</button>
                          <span>{it.qty}</span>
                          <button type="button" onClick={() => addToCart(it.id)} className="px-2 py-1 border rounded">+</button>
                        </div>
                        <button type="button" onClick={() => removeItem(it.id)} className="text-red-300 hover:underline ml-2">Remove</button>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-3 flex justify-between text-sm text-white/80">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-xl font-semibold">Delivery Details</h3>
                <input
                  type="text"
                  placeholder="Full name"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-3 py-2 outline-none border border-white/10 focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="tel"
                  placeholder="Phone (e.g., +1 555 123 4567)"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-3 py-2 outline-none border border-white/10 focus:ring-2 focus:ring-indigo-400"
                />

                <input
                  type="text"
                  placeholder="Address line 1 (Street, number)"
                  value={customer.address1}
                  onChange={(e) => setCustomer({ ...customer, address1: e.target.value })}
                  className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-3 py-2 outline-none border border-white/10 focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="text"
                  placeholder="Address line 2 (Apartment, suite, optional)"
                  value={customer.address2}
                  onChange={(e) => setCustomer({ ...customer, address2: e.target.value })}
                  className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-3 py-2 outline-none border border-white/10 focus:ring-2 focus:ring-indigo-400"
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    value={customer.city}
                    onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                    className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-3 py-2 outline-none border border-white/10 focus:ring-2 focus:ring-indigo-400"
                  />
                  <input
                    type="text"
                    placeholder="State / Province (optional)"
                    value={customer.state}
                    onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                    className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-3 py-2 outline-none border border-white/10 focus:ring-2 focus:ring-indigo-400"
                  />
                  <input
                    type="text"
                    placeholder="Postal code"
                    value={customer.postalCode}
                    onChange={(e) => setCustomer({ ...customer, postalCode: e.target.value })}
                    className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-3 py-2 outline-none border border-white/10 focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <textarea
                  rows={3}
                  placeholder="Delivery instructions (optional)"
                  value={customer.instructions}
                  onChange={(e) => setCustomer({ ...customer, instructions: e.target.value })}
                  className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-3 py-2 outline-none border border-white/10 focus:ring-2 focus:ring-indigo-400"
                />

                <button
                  type="submit"
                  disabled={!canPlace}
                  className={`w-full px-4 py-3 rounded-lg font-semibold transition border ${
                    canPlace
                      ? "bg-white text-black hover:bg-gray-200 border-white"
                      : "bg-white/20 text-white/60 cursor-not-allowed border-white/30"
                  }`}
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    ),
    document.body
  );
}
