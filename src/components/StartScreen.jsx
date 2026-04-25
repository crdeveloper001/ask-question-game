"use client";
import { motion } from "framer-motion";

export default function StartScreen({ next, name }) {
  return (
    <div className="screen">
      <div className="card">

        {/* Icono */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="start-icon"
        >
          🎮
        </motion.div>

        {/* Título */}
        <h1 className="title">
          Hola, <span className="highlight">{name}</span>
        </h1>

        {/* Subtítulo */}
        <p className="subtitle">
          Hice algo especial para ti 💖
        </p>

        {/* Botón */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="btn glow-btn mt-6"
        >
          Empezar
        </motion.button>

      </div>
    </div>
  );
}