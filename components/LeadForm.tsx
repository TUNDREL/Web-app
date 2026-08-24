"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const businessName = String(formData.get("business_name") || "");
    const email = String(formData.get("email") || "");

    // 1. Notify the sales team via Web3Forms — this is the primary lead
    // capture and determines whether the submission is treated as a
    // success. If this fails, nothing else matters, so it goes first.
    const web3FormsPromise = (async () => {
      const w3fData = new FormData(form);
      w3fData.append("access_key", WEB3FORMS_ACCESS_KEY);
      w3fData.append("subject", "New demo request — Tundrel Call Agent site");
      w3fData.append("from_name", "Tundrel Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: w3fData,
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message || "Lead notification failed.");
      }
    })();

    // 2. Send the client a confirmation email via EmailJS. This runs
    // alongside the Web3Forms call, not after it — and its failure
    // does NOT block the success screen, since the lead itself was
    // still captured even if the confirmation email has an issue.
    const emailJsPromise = emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_name: name,
        to_email: email,
        business_name: businessName,
      },
      { publicKey: EMAILJS_PUBLIC_KEY }
    );

    const [web3Result, emailResult] = await Promise.allSettled([
      web3FormsPromise,
      emailJsPromise,
    ]);

    if (web3Result.status === "rejected") {
      setStatus("error");
      setErrorMessage(
        web3Result.reason?.message || "Something went wrong. Please try again."
      );
      return;
    }

    if (emailResult.status === "rejected") {
      // Lead was captured successfully — the client just won't get the
      // confirmation email. Log it for debugging, but don't fail the
      // whole submission over it.
      console.error("EmailJS confirmation failed:", emailResult.reason);
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="lead-form-success">
        <h3>Thanks — you're on the list.</h3>
        <p>
          A member of our team will reach out within one business day to set
          up your 15-minute demo call. Check your inbox for a confirmation
          email, and feel free to try the live AI demo on the homepage in
          the meantime.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="lead-form-row">
        <label>
          <span>Full name</span>
          <input type="text" name="name" required placeholder="Jane Smith" />
        </label>
        <label>
          <span>Business name</span>
          <input type="text" name="business_name" required placeholder="Apex Heating & Air" />
        </label>
      </div>

      <div className="lead-form-row">
        <label>
          <span>Email</span>
          <input type="email" name="email" required placeholder="jane@apexhvac.com" />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" name="phone" required placeholder="(602) 555-0134" />
        </label>
      </div>

      <label>
        <span>Roughly how many calls do you miss per week?</span>
        <select name="missed_calls_estimate" defaultValue="">
          <option value="" disabled>
            Select an estimate
          </option>
          <option value="0-5">0–5</option>
          <option value="5-15">5–15</option>
          <option value="15-30">15–30</option>
          <option value="30+">30+</option>
          <option value="not-sure">Not sure</option>
        </select>
      </label>

      <label>
        <span>Anything else we should know? (optional)</span>
        <textarea name="message" rows={3} placeholder="Current setup, biggest pain point, etc." />
      </label>

      {status === "error" && <p className="lead-form-error">{errorMessage}</p>}

      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Request a demo call"}
      </button>
    </form>
  );
}