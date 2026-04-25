"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NameScreen({ next, setName }) {
  const [input, setInput] = useState("");

  return (
    <div className="screen">
      <div className="card">

        {/* Emoji animado */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl mb-6"
        >
          😊
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="title text-3xl"
        >
          Antes de empezar…
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="subtitle mt-4 text-lg"
        >
          Queremos saber tu nombre 💖
        </motion.p>

        {/* Input */}
        <motion.input
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu nombre..."
          className="input-primary text-xl mt-6"
        />

        {/* Botón */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileTap={{ scale: input ? 0.95 : 1 }}
          onClick={() => {
            if (!input) return;
            setName(input);
            next();
          }}
          disabled={!input}
          className={`btn mt-6 ${
            input ? "glow-btn" : "btn-disabled"
          }`}
        >
          {input ? "Continuar 💖" : "Escribe tu nombre"}
        </motion.button>

      </div>
    </div>
  );
}