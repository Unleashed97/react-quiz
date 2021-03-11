import React from 'react'

const InputAnswer = ({inputAnswer, setInputAnswer, formAnswerSubmit}) => {
    return (
        <form className="form-answer" onSubmit={formAnswerSubmit}>
            <input className="form-answer__input" type="text" placeholder="Your answer"  value={inputAnswer} autoComplete="off" onChange={event => setInputAnswer(event.target.value)}/>
        </form>
    )
}

export default InputAnswer
