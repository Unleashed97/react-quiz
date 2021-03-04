import React, {useState} from 'react'
import './App.css';

function App() {

  const quiz = [
    {
      questionText: 'What the capital of Russia?',
      questionImage: '/',
      answerOptions: [
        { answerText: 'Paris', isCorrect: false },
        { answerText: 'Moscow', isCorrect: true },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Rome', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Germany?',
      questionImage: '/',
      answerOptions: [
        { answerText: 'Minsk', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
        { answerText: 'Barcelona', isCorrect: false },
        { answerText: 'Berlin', isCorrect: true }
      ]
    }
  ];

  const [currentAnswer, setCurrentAnswer] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerBtnClick = (isCorrect) =>{
    if(isCorrect === true){
      setScore(score + 1);
    }
    let nextAnswer = currentAnswer + 1;
    if(nextAnswer < quiz.length){
      setCurrentAnswer(nextAnswer);
    }
    else setShowScore(true);
  }
  

  return (
    <div className="app">
      <div className="quiz">
        {
          showScore ? (
            <div className="quiz__score">
              <p className="quiz__score-text">You scored {score} out of {quiz.length}</p>
            </div>
          ) :
          (
            <div className="quiz__inner">
              <h1 className="quiz__title">Europe Capitals</h1>
              <div className="quiz__content">
                <div className="quiz__question">
                  <p className="quiz__question-count"><span>Question {currentAnswer + 1}</span>/{quiz.length}</p>
                  <p className="quiz__question-text">{quiz[currentAnswer].questionText}</p>
                </div>
                <div className="quiz__answer">
                  {
                    quiz[currentAnswer].answerOptions.map((answerOption, index) => (
                      <button className="quiz__answer-btn" onClick={()=>handleAnswerBtnClick(answerOption.isCorrect)} key={index}>{answerOption.answerText}</button>
                    ))
                  }
                </div>
              </div>
            </div>
          )
        }

      </div>
    </div>
  );
}

export default App;
