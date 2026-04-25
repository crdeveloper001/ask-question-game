"use client";
import { motion } from "framer-motion";

export default function StartScreen({ next, name }) {
  return (
    <div className="screen">
      <div className="card">

        {/* 🎮 Icono animado */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl mb-6"
        >
          🎮
        </motion.div>

        {/* 👋 Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="title text-3xl"
        >
          Hola,{" "}
          <span className="highlight glow-text">
            {name}
          </span>
        </motion.h1>

        {/* 💬 Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="subtitle mt-4 text-lg"
        >
          Hice algo especial para ti 💖
        </motion.p>

        {/* ✨ Extra (le da feeling) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8 }}
          className="text-sm mt-2"
        >
          Espero que te guste… 😌
        </motion.p>

        {/* 🚀 Botón */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={next}
          className="btn glow-btn mt-8"
        >
          Empezar 💖
        </motion.button>

      </div>
    </div>
  );
}