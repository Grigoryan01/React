import React, { useState } from 'react';
import ReactConfetti from 'react-confetti';
import quizData from '../data';

function Questions() {
  const [index, setIndex] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [finished, setFinished] = useState(false);

  const nextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIndex(index + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIndex(index - 1);
    }
  };

  const selectAnswer = (answer) => {
    if (!answeredQuestions[currentQuestionIndex] && !selectedAnswers[currentQuestionIndex]) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: answer,
      }));

      setAnsweredQuestions((prev) => ({
        ...prev,
        [currentQuestionIndex]: true,
      }));

      if (answer === currentQuestion.answer) {
        setTotalCorrect((prev) => prev + 1);
      }
    }
  };

  const finish = () => {
    setFinished(true);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <main>
      {!finished ? (
        <>
          <h2 className="title">Quiz</h2>
          <progress
            value={currentQuestionIndex + 1}
            max={quizData.length}
            className="progress-bar"
            style={{
              accentColor: currentQuestionIndex + 1 < quizData.length / 2 ? '#3C0E70' : '#3C0E70',
            }}
          />
          <div className="content">
            <p className="count">Question {index}/{quizData.length}</p>
            <p className="question">{currentQuestion.question}</p>
            <div className="answers-group">
              {currentQuestion.options.map((option, idx) => (
                <div
                  key={idx}
                  className="answer"
                  onClick={() => selectAnswer(option)}
                  style={{
                    backgroundColor:
                      selectedAnswers[currentQuestionIndex] === option
                        ? option === currentQuestion.answer
                          ? '#003300'
                          : '#800000'
                        : '#3C0E70',
                    opacity: selectedAnswers[currentQuestionIndex] && selectedAnswers[currentQuestionIndex] !== option ? 0.5 : 1,
                    pointerEvents: selectedAnswers[currentQuestionIndex] ? 'none' : 'auto',
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-back"
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-next"
              onClick={nextQuestion}
              disabled={currentQuestionIndex === quizData.length - 1}
            >
              Next
            </button>
            <button type="button" className="btn btn-finish" onClick={finish}>
              Finish
            </button>
          </div>
        </>
      ) : (
        <div className="finished-container">
          <ReactConfetti />
          <h3 className="finish-title">
            {totalCorrect < 5
              ? `Don't worry, you'll do better next time!`
              : totalCorrect > 5 && totalCorrect < 10
              ? `Not bad! Keep up the great effort!`
              : `Excellent! You're truly a quiz master!`}
          </h3>
          <p className="finish-text">
            You answered {totalCorrect} {totalCorrect === 1 ? 'question' : 'questions'} of {quizData.length} correctly.
          </p>
        </div>
      )}
    </main>
  );
}


export default Questions;
