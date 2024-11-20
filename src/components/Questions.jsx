import React, { useState } from 'react';
import quizData from '../data';

function Questions() {
  const [index, setIndex] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [finished, setFinished]=useState(false);

  const nextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIndex(index + 1);
      setSelectedAnswer(null);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIndex(index - 1);
      setSelectedAnswer(null);
    }
  };

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (!answeredQuestions[currentQuestionIndex]) {
      setAnsweredQuestions((prev) => ({
        ...prev,
        [currentQuestionIndex]: true, 
      }));

      if (answer === currentQuestion.answer) {
        setTotalCorrect((prev) => prev + 1);
      }
    }
  };

  const finish =()=>{
    setFinished(true);
  }
  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <main>
        {!finished ? (
            <>
      <h2 className="title">Quiz</h2>
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
                  selectedAnswer === option
                    ? option === currentQuestion.answer
                      ? '#003300'
                      : '#800000'
                    : '#3C0E70',
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
        <button type='button' className='btn btn-finish' onClick={finish}>Finish</button>
      </div>
     
      </>
        ) : ( <p>You answered {totalCorrect} {totalCorrect==1 ? 'question' : 'question(s)'} of {quizData.length} correctly.</p>)
    }
    </main>
  );
}

export default Questions;
