"use client";

import { motion } from "framer-motion";

export default function TransitionScreen({ next }) {
  return (
    <div className="screen">
      <div className="card">

        {/* Icono */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="transition-icon"
        >
          💌
        </motion.div>

        {/* Título */}
        <p className="title">
          Ya casi terminamos,

        {/* Subtítulo */}
        <p className="subtitle">
          Pero hay una pregunta de bono que queremos hacerte…
        </p>
        </p>

        {/* Botón */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="btn glow-btn mt-8"
        >
          Continuar
        </motion.button>

      </div>
    </div>
  );
}