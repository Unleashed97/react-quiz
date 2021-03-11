import React from 'react'

import quiz from '../data/quiz'

const AnswerBtns = (currentQuestion, onClickBtn) => {
    return (
        <>
            {
                quiz[currentQuestion].answerOptions.map( (item, index) => (
                    <button className="btn" key={index} onClick={()=> onClickBtn(item.isCorrect)}>{item.answerText}</button>
                ))
            }
        </>
    )
}

export default AnswerBtns
