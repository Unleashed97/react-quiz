import React, {useState} from 'react'

import './scss/main.scss';

import quiz from './data/quiz'

function App() {

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

  const handleRepeatQuiz = () =>{
    setShowScore(false);
    setScore(0);
    setCurrentAnswer(0);
  }
  

  return (
    <div className="wrapper">
      <div className="quiz">
        {
          showScore ? (
            <div className="quiz__score">
              <p className="quiz__score-text">You scored {score} out of {quiz.length}</p>
              <div className="quiz__score-btns">
                <button className="btn" onClick={handleRepeatQuiz} >Again</button>
                <button className="btn">Another one</button>
              </div>
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
                      <button className="btn" onClick={()=>handleAnswerBtnClick(answerOption.isCorrect)} key={index}>{answerOption.answerText}</button>
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
