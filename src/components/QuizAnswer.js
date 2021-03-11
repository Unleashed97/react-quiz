import React from 'react'

import quiz from '../data/quiz'

import InputAnswer from '../components/InputAnswer'

const QuizAnswer = ({answerMode, inputAnswer, setInputAnswer, currentQuestion, formAnswerSubmit, onAnswerClick}) => {
    return (
        <div className="quiz__answer">
            {/* {
                answerMode ? (
                    <form className="form-answer" onSubmit={formAnswerSubmit}>
                        <input className="form-answer__input" type="text" placeholder="Your answer"  value={inputAnswer} autoComplete="off" onChange={event => setInputAnswer(event.target.value)}/>
                    </form>
                ) :

                (
                    quiz[currentQuestion].answerOptions.map( (item, index) => (
                       <button className="btn" key={index} onClick={()=> handleAnswerClick(item.isCorrect)}>{item.answerText}</button>
                    ))
                )      

            } */}
        </div>
    )
}

export default QuizAnswer
