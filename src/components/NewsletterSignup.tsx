"use client";
import { useState, useEffect } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [hydrated, setHydrated] = useState(false);

  // Hydration-safe: only render after client mount
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setIsSubscribed(true);
      setEmail(""); // reset input
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-1/2 p-4 rounded  gap-4 border border-white/40 bg-white/20 items-center mb-10"
    >
      <h3 className="text-lg font-semibold mb-2">Sign up to receive updates</h3>
      <div className="flex items-center gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          disabled={loading || isSubscribed}
          className="bg-blue-950 hover:bg-blue-800 transition-all duration-300 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
        >
          {loading
            ? "Subscribing..."
            : isSubscribed
              ? "Subscribed!"
              : "Subscribe"}
        </button>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      {isSubscribed && !error && (
        <p className="text-green-600">Thank you for subscribing!</p>
      )}
    </form>
  );
}
