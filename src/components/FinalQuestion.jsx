"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FinalQuestion({ next, name }) {
  const [phase, setPhase] = useState(0);

  const text1 = "Ejecutando función final… 💻";

  const text2 = `if (te gusta Claudito) {
  return "Sí 💖";
}`;

  const text3 = `En este tiempo que llevo saliendo contigo, me he dado cuenta de lo increíble que eres y lo feliz que me haces.
Eres la persona más especial que he conocido, y cada momento a tu lado es un regalo.
Me encantaría seguir construyendo recuerdos juntos. 💖`;

  const text4 = `${name}, ¿quieres ser mi novia? 💖`;

  // ⏱️ control de fases
  useEffect(() => {
    if (phase === 0) {
      setTimeout(() => setPhase(1), 2500);
    }
    if (phase === 1) {
      setTimeout(() => setPhase(2), 5000);
    }
  }, [phase]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.025,
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

        {/* ❤️ Corazón */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="final-heart"
        >
          ❤️
        </motion.div>

        <div className="final-text">

          {/* Código */}
          {phase >= 0 && (
            <motion.pre
              variants={container}
              initial="hidden"
              animate="visible"
              className="code-block"
            >
              {renderText(text1 + "\n\n" + text2)}
            </motion.pre>
          )}

          {/* 💖 Mensaje emocional */}
          {phase >= 1 && (
            <motion.p
              variants={container}
              initial="hidden"
              animate="visible"
              className="final-message mt-6"
            >
              {renderText(text3)}
            </motion.p>
          )}

          {/* 💥 Pregunta final */}
          {phase >= 2 && (
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="final-question highlight mt-6"
            >
              {renderText(text4)}
            </motion.h1>
          )}

        </div>

        {/* 💖 Botones SOLO cuando aparece la pregunta */}
        {phase >= 2 && (
          <motion.div
            className="final-buttons mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
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
          </motion.div>
        )}

      </div>
    </div>
  );
}