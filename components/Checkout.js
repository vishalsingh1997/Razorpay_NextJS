"use client";

import Script from "next/script";
import { useState } from "react";

export default function Checkout() {
  const [amount, setAmount] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });
    const order = await response.json();

    console.log(order);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "GlobEDwise",
      description: "Test Transaction",
      order_id: order.id,
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        alert(`Order ID: ${response.razorpay_order_id}`);
        alert(`Signature: ${response.razorpay_signature}`);
      },
      prefill: {
        name: username,
        email: email,
        contact: phone,
      },
      notes: {
        address: "Your Company Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount "
          className="outline-none border px-3 py-2 rounded-md"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Your Name "
          className="outline-none border px-3 py-2 rounded-md"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Eamil "
          className="outline-none border px-3 py-2 rounded-md"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Your Phone "
          className="outline-none border px-3 py-2 rounded-md"
        />
        <button
          className="border rounded-md px-3 py-2 hover:bg-gray-500"
          onClick={handlePayment}
        >
          Pay with Razorpay
        </button>
      </div>

      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
