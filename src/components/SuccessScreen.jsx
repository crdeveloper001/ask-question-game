"use client";

export default function SuccessScreen({ answers, questions }) {
  const results = questions.map((q, i) => {
    return {
      question: q.question,
      correct: q.correct,
      user: answers[i],
      isCorrect: q.correct === answers[i],
    };
  });

  const score = results.filter(r => r.isCorrect).length;

  return (
    <div className="screen">
      <div className="card">

        <h1 className="success-title">
          Sacaste {score} / {questions.length} 💖
        </h1>

        <div className="results-container">
          {results.map((r, i) => (
            <div key={i} className="result-item">
              <p className="question">{r.question}</p>

              <p>
                Tu respuesta:{" "}
                <span className={r.isCorrect ? "correct" : "wrong"}>
                  {r.user}
                </span>
              </p>

              {!r.isCorrect && (
                <p className="correct-answer">
                  Correcta: {r.correct}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}