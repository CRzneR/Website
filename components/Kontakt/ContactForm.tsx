"use client";

import { useState, type FormEvent } from "react";
import { FiEdit2, FiMail, FiUser } from "react-icons/fi";
import { CONTACT_EMAIL } from "./contacts";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

type Status = "idle" | "sending" | "success" | "error";

const fieldWrap =
  "flex items-start gap-3 rounded-xl border border-white/15 bg-white/[0.02] px-4 transition-colors duration-300 focus-within:border-accent/70 focus-within:shadow-[0_0_20px_-6px_rgba(245,252,123,0.5)]";
const fieldInput =
  "w-full bg-transparent py-4 text-base text-white placeholder:text-soft/70 focus:outline-none";
const fieldIcon = "mt-4 h-5 w-5 shrink-0 text-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: Bots füllen dieses versteckte Feld aus, Menschen nicht
    if (data.get("website")) return;

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    // Fallback ohne Endpoint: Mailprogramm öffnen
    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Anfrage über christophrenz.de von ${name}`);
      const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4" noValidate={false}>
      <label className={fieldWrap}>
        <span className="sr-only">Dein Name</span>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Dein Name"
          className={fieldInput}
        />
        <FiUser aria-hidden="true" className={fieldIcon} />
      </label>

      <label className={fieldWrap}>
        <span className="sr-only">Deine E-Mail</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Deine E-Mail"
          className={fieldInput}
        />
        <FiMail aria-hidden="true" className={fieldIcon} />
      </label>

      <label className={fieldWrap}>
        <span className="sr-only">Deine Nachricht</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Deine Nachricht"
          className={`${fieldInput} resize-none`}
        />
        <FiEdit2 aria-hidden="true" className={fieldIcon} />
      </label>

      {/* Honeypot – für Menschen unsichtbar */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-3 self-start rounded-full bg-accent px-7 py-4 text-sm font-semibold text-[#151515] shadow-[0_0_30px_-8px_rgba(245,252,123,0.7)] transition-[transform,box-shadow] duration-300 hover:shadow-[0_0_40px_-4px_rgba(245,252,123,0.8)] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

        <p className="max-w-[14rem] text-sm leading-snug text-soft">
          Ich melde mich so schnell wie möglich bei dir zurück.
        </p>
      </div>

      {/* Statusmeldung – wird von Screenreadern vorgelesen */}
      <p role="status" aria-live="polite" className="min-h-[1.5rem] text-sm">
        {status === "success" && (
          <span className="text-accent">Danke! Deine Nachricht ist angekommen.</span>
        )}
        {status === "error" && (
          <span className="text-[#FF8A7A]">
            Das hat leider nicht geklappt. Schreib mir gern direkt an {CONTACT_EMAIL}.
          </span>
        )}
      </p>
    </form>
  );
}
