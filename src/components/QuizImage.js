import React from 'react'

import quiz from '../data/quiz'

const QuizImage = ({currentQuestion}) => {
    return (
        <div className="quiz__image">
            <img src={`${process.env.PUBLIC_URL}/${quiz[currentQuestion].questionImage}`} alt=""/>
        </div>
    )
}

export default QuizImage
