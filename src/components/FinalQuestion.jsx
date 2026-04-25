"use client";

import { motion } from "framer-motion";

export default function FinalQuestion({ next, name }) {
  const text1 = "Ejecutando función final… 💻";
  const text2 = `if (te gusta Claudito) {
  return "Sí 💖";
}`;
  const text3 = `${name}, ¿quieres ser mi novia? 💖`;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const renderText = (text) =>
    text.split("").map((char, i) => (
      <motion.span key={i} variants={letter}>
        {char === "\n" ? <br /> : char}
      </motion.span>
    ));

  return (
    <div className="screen">
      <div className="card">

        {/* ❤️ Corazón animado */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="final-heart"
        >
          ❤️
        </motion.div>

        {/* 🧠 Texto animado */}
        <div className="final-text">

          {/* Línea 1 */}
          <motion.p
            variants={container}
            initial="hidden"
            animate="visible"
            className="mb-4"
          >
            {renderText(text1)}
          </motion.p>

          {/* Código */}
          <motion.pre
            variants={container}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="code-block"
          >
            {renderText(text2)}
          </motion.pre>

          {/* Pregunta final */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.8 }}
            className="final-question highlight"
          >
            {renderText(text3)}
          </motion.h1>

        </div>

        {/* 💖 Botones */}
        <div className="final-buttons mt-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={next}
            className="btn glow-btn"
          >
            Sí 💕
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={next}
            className="btn glow-btn"
          >
            Obvio 😏
          </motion.button>
        </div>

      </div>
    </div>
  );
}