"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ConfirmModal({ isOpen, onConfirm, onCancel }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="confirm-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="confirm-box"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="confirm-text">
              ¿Estás segura de tu respuesta? 😏
            </p>

            <div className="confirm-buttons">
              <button className="btn glow-btn" onClick={onConfirm}>
                Sí 💖
              </button>

              <button className="btn-secondary" onClick={onCancel}>
                Cambiar 😅
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}