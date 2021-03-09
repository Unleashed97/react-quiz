import React, {useState} from 'react'


import quiz from '../data/quiz';


// import image from '../images/austria.jpg';

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answerMode, setAnswerMode] = useState(false);

    const [score, setScore] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [inputAnswer, setInputAnswer] = useState('');

    const handleCheckboxClick = () =>{
        setAnswerMode(!answerMode);
    }
    const handleAnswerClick = (isCorrect) =>{
        if(isCorrect === true){
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < quiz.length){
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowScore(true);
        }
    }

    const handleCheckAnswersBtnClick = () =>{

    }

    const handleTryAgainbtnClick = ()=> {
        setShowScore(false);
        setScore(0);
        setCurrentQuestion(0);
    }

    const handleSubmitAnswerForm = (event) =>{
        event.preventDefault();

        let correctAnswer;
        quiz[currentQuestion].answerOptions.map((item)=>{
            if(item.isCorrect === true){
                correctAnswer = item.answerText;
            }
        })

        if(inputAnswer.toUpperCase() === correctAnswer.toUpperCase()){
            setScore(score +1);
            let nextQuestion = currentQuestion + 1;
            if(nextQuestion < quiz.length){
                setCurrentQuestion(nextQuestion);
            }
            else{
                setShowScore(true);
            }
            setInputAnswer('');
        }
        else console.log('wrong');
    }
    return (
        <>
            <div className="quiz">
                <div className="container">
                    <div className="quiz__inner">
                        <h1 className="quiz__title">European capitals</h1>
                        {
                            showScore ? (
                                <div className="quiz__score">
                                    <p className="quiz__score-text">You scored {score} out of {quiz.length}</p>

                                    <div className="quiz__score-btns">
                                        <button className="btn btn--score" onClick={handleCheckAnswersBtnClick}>Check answers</button>
                                        <button className="btn btn--score" onClick={handleTryAgainbtnClick}>Try again</button>
                                    </div>
                                </div>
                            ) :
                            
                            (
                                <div className="quiz__content">
                                    <div className="quiz__image">
                                        <img src='' alt=""/>
                                    </div>
                                    <div className="quiz__text-block">
                                        <div className="control">
                                            <h6 className="control__title">Settings</h6>
                                            <div className="control__content">
                                                <div className="control-item">
                                                    <label className="check" htmlFor="checkbox">
                                                        <p className="check__text">Hard mode</p>
                                                        <input id="checkbox" className="check__input" type="checkbox" onChange={handleCheckboxClick} checked={answerMode} />
                                                        <span className="check__slider"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quiz__question">
                                            <h3 className="quiz__question-title">{currentQuestion + 1}/<span>{quiz.length}</span> {quiz[currentQuestion].questionText}</h3>
                                        </div>
                                        <div className="quiz__answer">
                                            {
                                                answerMode ? (
                                                    <form className="form-answer" onSubmit={handleSubmitAnswerForm}>
                                                        <input className="form-answer__input" type="text" placeholder="Your answer"  value={inputAnswer} autoComplete="off" onChange={event => setInputAnswer(event.target.value)}/>
                                                    </form>
                                                ) :

                                                (
                                                    quiz[currentQuestion].answerOptions.map( (item, index) => (
                                                        <button className="btn" key={index} onClick={()=> handleAnswerClick(item.isCorrect)}>{item.answerText}</button>
                                                    ))
                                                )      

                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz
