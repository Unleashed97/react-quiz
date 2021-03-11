import React from 'react'

import quiz from '../data/quiz';

const QuizScore = ({score, handleCheckAnswersBtnClick, handleTryAgainbtnClick}) => {
    return (
        <div className="quiz__score">
            <p className="quiz__score-text">You scored {score} out of {quiz.length}</p>
            <div className="quiz__score-btns">
                <button className="btn btn--score" onClick={handleCheckAnswersBtnClick}>Check answers</button>
                <button className="btn btn--score" onClick={handleTryAgainbtnClick}>Try again</button>
            </div>
        </div>
    )
}

export default QuizScore
