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
          Pero antes de la última pregunta que es la más importante, quiero lanzar una ultima pregunta...
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