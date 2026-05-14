"use client";

import { useState } from "react";

interface PaymentButtonProps {
  tier: string;
  name: string;
  email: string;
  phone: string;
  onSuccess: (paymentId: string) => void;
  onError: (msg: string) => void;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function PaymentButton({ tier, name, email, phone, onSuccess, onError }: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handlePayment() {
    setLoading(true);
    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        onError("Could not load payment gateway. Check your internet connection.");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "create", tier, name, email, phone }),
      });

      if (!res.ok) {
        const err = await res.json();
        onError(err.error || "Failed to create payment order.");
        setLoading(false);
        return;
      }

      const { orderId, amount, currency, keyId, tierLabel } = await res.json();

      const options = {
        key: keyId,
        amount,
        currency,
        name: "Backtraq",
        description: tierLabel,
        order_id: orderId,
        prefill: { name, email, contact: phone },
        theme: { color: "#1F3D2A" },
        handler: async (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
          const verify = await fetch("/api/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "verify", ...response }),
          });

          const result = await verify.json();
          if (result.verified) {
            onSuccess(result.paymentId);
          } else {
            onError("Payment verification failed. Contact hello@backtraq.in with your payment ID.");
          }
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch {
      onError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="w-full bg-terracotta text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-terracotta-dark transition-colors disabled:opacity-60"
    >
      {loading ? (
        <>
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Opening payment…
        </>
      ) : (
        "Pay Now"
      )}
    </button>
  );
}
