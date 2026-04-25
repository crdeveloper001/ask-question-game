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

  useEffect(() => {
    // cambiar mensajes cada 2s
    const interval = setInterval(() => {
      setTextIndex((i) => (i + 1) % messages.length);
    }, 2000);

    // avanzar después de 7s
    const timeout = setTimeout(() => {
      next();
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
        <motion.div
          className="loader mb-6"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Texto dinámico */}
        <motion.p
          key={textIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="subtitle text-center"
        >
          {messages[textIndex]}
        </motion.p>

      </div>
    </div>
  );
}