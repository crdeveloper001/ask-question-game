"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function QuestionScreen({ data, index, total, onNext }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(null);
  }, [index]);

  const options = data?.options || [];
  const question = data?.question || "";

  return (
    <div className="screen">
      <div className="card">
        <p className="question-counter">
          {index + 1} / {total}
        </p>

        <h2 className="question-title">{question}</h2>

        <div className="options-container">
          {options.map((opt, optIndex) => {
            const isSelected = selected === opt;

            return (
              <motion.button
                key={`${index}-${optIndex}`}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelected(opt)} // ✅ FIX
                className={`option-btn ${isSelected ? "selected" : ""}`}
              >
                {opt}

                {isSelected && (
                  <motion.div
                    layoutId="selectedGlow"
                    className="option-glow"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <motion.button
          whileTap={{ scale: selected ? 0.95 : 1 }}
          onClick={() => selected && onNext(selected)} // ✅ FIX
          disabled={!selected}
          className="next-btn"
        >
          {selected ? "Siguiente →" : "Selecciona una opción"}
        </motion.button>
      </div>
    </div>
  );
}