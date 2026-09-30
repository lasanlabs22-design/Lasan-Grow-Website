"use client";

import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";
import { SITE } from "@/lib/site";

// No server involved: the form writes an email in the visitor's own mail app, addressed to us.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k) => String(f.get(k) || "").trim();
    const subject = `Lasan Grow demo request: ${get("company") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Phone: ${get("phone")}`,
      `Sales team size: ${get("size")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-line bg-white p-5 shadow-card sm:p-7">
      <h3 className="text-lg font-semibold">Request a free demo</h3>
      <p className="mt-1 text-sm text-muted">Tell us a little about your sales team and we&apos;ll get back to you shortly.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Your name
          <input name="name" required autoComplete="name" className="field" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Company
          <input name="company" required autoComplete="organization" className="field" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Phone
          <input name="phone" type="tel" autoComplete="tel" className="field" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          People in your sales team
          <select name="size" className="field" defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option>1–5</option>
            <option>6–20</option>
            <option>21–50</option>
            <option>50+</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
          How do you track sales today?
          <textarea
            name="message"
            rows={4}
            className="field resize-y"
            placeholder="E.g. leads come in on WhatsApp and a shared spreadsheet; we lose track of follow-ups."
          />
        </label>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted">
        By sending this request, you agree to our{" "}
        <Link href="/terms" className="font-medium text-brand-600 underline-offset-2 hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="font-medium text-brand-600 underline-offset-2 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <button
        type="submit"
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto"
      >
        <Send className="size-4" /> Send request
      </button>
      <p className="mt-3 text-xs text-subtle" aria-live="polite">
        {sent
          ? `Your mail app should now be open with the message ready. If it didn't open, write to us at ${SITE.email}.`
          : "Opens your email app with the message ready to send."}
      </p>
    </form>
  );
}
