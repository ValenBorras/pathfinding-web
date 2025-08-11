"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

export default function AssistanceRequestPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          product: formData.get("product"),
          message: formData.get("message"),
          token: formData.get("_hpt"),
        }),
      });
      if (res.ok) {
        setStatus("success");
        setMessage("Gracias. Te contactaremos pronto.");
      } else {
        setStatus("error");
        setMessage("No se pudo enviar. Intenta nuevamente.");
      }
    } catch {
      setStatus("error");
      setMessage("Error de red. Intenta nuevamente.");
    }
  }

  return (
    <div className="container py-12 sm:py-16">
      <SectionHeader eyebrow="Soporte" title="Solicitud de asistencia" />
      <form
        className="mt-6 max-w-xl space-y-4"
        action={async (formData) => onSubmit(formData)}
      >
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input name="name" required className="mt-1 w-full rounded-md border border-[--color-border] bg-background px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-md border border-[--color-border] bg-background px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Producto</label>
          <select name="product" className="mt-1 w-full rounded-md border border-[--color-border] bg-background px-3 py-2">
            <option>FBAToolkit</option>
            <option>MercadoToolkit</option>
            <option>GIT 2.0</option>
            <option>Otro</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Mensaje</label>
          <textarea name="message" rows={5} className="mt-1 w-full rounded-md border border-[--color-border] bg-background px-3 py-2" />
        </div>
        {/* Honeypot */}
        <input type="text" name="_hpt" className="hidden" tabIndex={-1} autoComplete="off" />
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center rounded-md bg-[--color-accent] px-4 py-2 text-sm text-white disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>
          {message ? <span className="text-sm text-[--color-muted]">{message}</span> : null}
        </div>
      </form>
    </div>
  );
}


