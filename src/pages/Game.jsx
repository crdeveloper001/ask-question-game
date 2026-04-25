"use client";

import { useState } from "react";
import StartScreen from "../components/StartScreen";
import IntroScreen from "../components/IntroScreen";
import QuestionScreen from "../components/QuestionScreen";
import TransitionScreen from "../components/TransitionScreen";
import FinalQuestion from "../components/FinalQuestion";
import SuccessScreen from "../components/SuccessScreen";
import NameScreen from "../components/NameScreen";
import ConfirmModal from "../components/ConfirmModal";
import LoadingScreen from "../components/LoadingScreen";

export default function Game() {
  const [step, setStep] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [name, setName] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [tempAnswer, setTempAnswer] = useState(null); // 🔥 clave

  const questions = [
    {
      question: "¿Dónde fue nuestra primera salida?",
      options: ["Un Cine", "Un Parque", "Un Restaurante en chepe", "En tu casa viendo una película"],
      correct: "Un Restaurante en chepe",
    },
    {
      question: "¿Donde fue nuestro primer beso JEJE?",
      options: ["En tu casa", "en el cine", "en un mirador", "En el carro mientras veíamos una película"],
      correct: "en un mirador",
    },
    {
      question: "¿A claudito que le gusta hacer cuando esta de vago?",
      options: ["Jugar videojuegos", "ir a picar en su hondita SI", "tomar guaro como tonto", "ir al gym a marcar músculo💪"],
      correct: "Jugar videojuegos",
    },
    {
      question: "¿Cual es la comida favorita de Chantal?",
      options: ["La Pizza", "Un Rico Sushi", "Una Buena Hamburguesa", "Pollito a la plancha🍝", "tacos mexicanos 🌮"],
      correct: "Pollito a la plancha🍝",
    },
    {
      question: "¿Qué es lo que le gusta más a Chantal de Claudito según lo que ELLA JURA?",
      options: ["Su humildad 😌", "Su seriedad", "Sus músculos 💪", "Todo ehhhh"],
      correct: "Todo ehhhh",
    },
    {
      question: "¿Tu mamá aprueba a Claudito?",
      options: ["Sí, te adora 😍", "No, te odia 😢", "Ni idea 😅"],
      correct: "Sí, te adora 😍",
    },
    {
      question: "¿Qué te gusta más de Claudito?",
      options: ["Su sentido del humor", "Su forma de ser", "Todo 😌"],
      correct: "Todo 😌",
    },
  ];

  const totalQuestions = questions.length;

  const next = () => setStep((s) => s + 1);

  // 💖 confirmar respuesta
  const handleConfirm = () => {
    setShowConfirm(false);

    if (tempAnswer !== null) {
      setAnswers((prev) => [...prev, tempAnswer]);
    }

    if (questionIndex < totalQuestions - 1) {
      setQuestionIndex((i) => i + 1);
    } else {
      setStep(4);
    }

    setTempAnswer(null); // limpiar
  };

  if (step === 0)
    return <NameScreen next={next} setName={setName} />;

  if (step === 1)
    return <StartScreen next={next} name={name} />;

  if (step === 2)
    return <IntroScreen next={next} />;

  if (step === 3) {
    const current = questions[questionIndex];

    return (
      <>
        <QuestionScreen
          key={questionIndex}
          data={current}
          index={questionIndex}
          total={totalQuestions}
          onNext={(selected) => {
            setTempAnswer(selected); // 👈 guardar temporal
            setShowConfirm(true);    // 👈 abrir modal
          }}
        />

        <ConfirmModal
          isOpen={showConfirm}
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirm(false)}
        />
      </>
    );
  }

  if (step === 4)
    return <TransitionScreen next={() => setStep(5)} />;

  if (step === 5)
    return <LoadingScreen next={() => setStep(6)} />;

  if (step === 6)
    return <FinalQuestion next={() => setStep(7)} name={name} />;

  if (step === 7)
    return <SuccessScreen answers={answers} questions={questions} />;

  return null;
}