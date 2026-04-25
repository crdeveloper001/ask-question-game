"use client";
import { useState } from "react";

export default function NameScreen({ next, setName }) {
  const [input, setInput] = useState("");

  return (
    <div className="screen">
      <div className="card">

        <div className="text-6xl mb-6">😊</div>

        <h1 className="title">
          Antes de empezar...
        </h1>

        <p className="subtitle mt-4">
          ¿Cómo te llamas?
        </p>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu nombre..."
          className="input-primary"
        />

        <button
          onClick={() => {
            if (!input) return;
            setName(input);
            next();
          }}
          className="btn glow-btn mt-6"
        >
          Continuar 💖
        </button>

      </div>
    </div>
  );
}