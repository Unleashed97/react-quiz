import React from 'react'

const Quiz = () => {
    return (
        <>
            <div className="container">
                <div className="quiz">
                    <h1 className="quiz__title">European capitals</h1>
                    <div className="quiz__content">
                        <div className="quiz__image">
                            <img src="https://placehold.it/600x500" alt=""/>
                        </div>
                        <div className="quiz__text-block">
                            <div className="quiz__control">
                                <span className="quiz__control-item">
                                    <label className="check" htmlFor="">
                                        Hard mode
                                        <input className="check__input" type="checkbox"/>
                                        <span className="check__slider"></span>
                                    </label>
                                </span>
                            </div>
                            <div className="quiz__question">
                                <h3 className="quiz__question-title">1/<span>44</span> What capital of Russia </h3>
                            </div>
                            <div className="quiz__answer">
                                <button className="btn">Answer 1</button>
                                <button className="btn">Answer 2</button>
                                <button className="btn">Answer 3</button>
                                <button className="btn">Answer 4</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz
