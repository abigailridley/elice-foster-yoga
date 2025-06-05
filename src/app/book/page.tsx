"use client";

import { useState } from "react";

export default function BookingPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // Add name/date later
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book a Class</h1>

      <label className="block mb-2">Your Name</label>
      <input
        className="border p-2 w-full mb-4"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="block mb-2">Email</label>
      <input
        className="border p-2 w-full mb-4"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="block mb-2">Select Class Date</label>
      <select
        className="border p-2 w-full mb-4"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      >
        <option value="">Choose a date</option>
        <option value="2025-06-01">Sunday 1 June</option>
        <option value="2025-06-08">Sunday 8 June</option>
      </select>

      <button
        className="bg-green-600 text-white py-2 px-4 w-full"
        disabled={loading || !email || !name || !date}
        onClick={handleCheckout}
      >
        {loading ? "Redirecting…" : "Pay with card"}
      </button>
    </main>
  );
}
