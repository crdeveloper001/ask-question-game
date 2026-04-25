"use client";
import { motion } from "framer-motion";

export default function IntroScreen({ next }) {
  return (
    <div className="screen">
      <div className="card">

        {/* Icono */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="intro-icon"
        >
          💭
        </motion.div>

        {/* Título */}
        <h1 className="title">
          Antes de empezar...
        </h1>

        {/* Texto principal */}
        <p className="subtitle">
          Quiero ver qué tan bien nos conocemos 😏
        </p>

        {/* Texto extra */}
        <p className="intro-hint">
          Prometo que al final vale la pena...
        </p>

        {/* Botón */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="btn glow-btn mt-8"
        >
          Continuar 💖
        </motion.button>

      </div>
    </div>
  );
}