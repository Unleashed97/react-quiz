import React from 'react'

import quiz from '../data/quiz';

const QuizScore = ({score, handleCheckAnswersBtnClick, handleTryAgainbtnClick}) => {
    return (
        <div className="score">
            <div className="score__inner">
                <p className="score__text">You scored {score} out of {quiz.length}</p>
                <div className="score__btns">
                    <button className="btn btn--score" onClick={handleCheckAnswersBtnClick}>Check answers</button>
                    <button className="btn btn--score" onClick={handleTryAgainbtnClick}>Try again</button>
                </div>
            </div>
        </div>
    )
}

export default QuizScore
