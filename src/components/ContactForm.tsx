"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card text-center py-12">
        <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-dark mb-2">Tak for din besked!</h3>
        <p className="text-text-muted">Jeg vender tilbage inden for 24 timer.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 btn-secondary text-sm"
        >
          Send ny besked
        </button>
      </div>
    );
  }

  return (
    <form
      name="kontakt"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="kontakt" />
      <div className="hidden">
        <label>
          Lad dette felt være tomt: <input name="bot-field" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="navn" className="block text-sm font-medium text-text-dark mb-1">
            Navn <span className="text-red-500">*</span>
          </label>
          <input
            id="navn"
            name="navn"
            type="text"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="Dit fulde navn"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-text-dark mb-1">
            Telefon
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="+45 XX XX XX XX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          placeholder="din@email.dk"
        />
      </div>

      <div>
        <label htmlFor="emne" className="block text-sm font-medium text-text-dark mb-1">
          Emne
        </label>
        <select
          id="emne"
          name="emne"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
        >
          <option value="">Vælg emne...</option>
          <option value="Hypnose">Hypnose</option>
          <option value="NLP">NLP Terapi</option>
          <option value="Terapi">Terapi</option>
          <option value="Hypnoseshow">Hypnoseshow</option>
          <option value="Online terapi">Online terapi</option>
          <option value="Andet">Andet</option>
        </select>
      </div>

      <div>
        <label htmlFor="besked" className="block text-sm font-medium text-text-dark mb-1">
          Besked <span className="text-red-500">*</span>
        </label>
        <textarea
          id="besked"
          name="besked"
          required
          rows={5}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
          placeholder="Fortæl kort om, hvad du ønsker hjælp til..."
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Der opstod en fejl. Prøv igen eller kontakt mig direkte på telefon.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sender..." : "Send besked"}
      </button>
    </form>
  );
}
