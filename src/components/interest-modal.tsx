"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";

type InterestModalProps = {
  open: boolean;
  onClose: () => void;
};

export function InterestModal({ open, onClose }: InterestModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
      role="dialog"
      aria-labelledby="interest-title"
      aria-describedby="interest-description"
    >
      <section className="interest-modal">
        <button
          aria-label="Fechar aviso"
          className="icon-button"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          <X aria-hidden="true" size={20} />
        </button>
        <p className="modal-kicker">Festa 34 Anos</p>
        <h2 id="interest-title">As vendas ainda não começaram.</h2>
        <p id="interest-description">
          Esta é uma versão demonstrativa. Acompanhe os canais oficiais da
          Explosão Inferno Coral para saber das novidades.
        </p>
        <button className="button button--primary" onClick={onClose} type="button">
          Entendi
        </button>
      </section>
    </div>
  );
}
