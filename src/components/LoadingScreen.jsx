"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ next }) {
  const messages = [
    "Analizando tus respuestas… 🧠",
    "Calculando compatibilidad 💖",
    "Verificando sentimientos… 😏",
    "Preparando la pregunta más importante… 💌",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((i) => (i + 1) % messages.length);
    }, 2000);

    // 👇 en vez de avanzar, solo habilita botón
    const timeout = setTimeout(() => {
      setReady(true);
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="screen">
      <div className="card">

        {/* Loader */}
        {!ready && (
          <motion.div
            className="loader mb-6"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        )}

        {/* Texto dinámico */}
        <motion.p
          key={textIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="subtitle text-center"
        >
          {ready
            ? "Todo está listo… 💖"
            : messages[textIndex]}
        </motion.p>

        {/* 👇 Botón aparece solo cuando termina */}
        {ready && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={next}
            className="btn glow-btn mt-8"
          >
            Continuar 💌
          </motion.button>
        )}

      </div>
    </div>
  );
}