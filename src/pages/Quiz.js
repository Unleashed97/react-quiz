import React, {useState} from 'react'

import quiz from '../data/quiz';

import AnswerMode from '../components/AnswerMode';
import QuizScore from '../components/QuizScore';
import QuizImage from '../components/QuizImage';
import InputAnswer from '../components/InputAnswer';
import QuizAnswer from '../components/QuizAnswer';
// import AnswerBtns from '../components/AnswerBtns';


const Quiz = ({answerMode, onChangeAnswerMode}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [score, setScore] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [inputAnswer, setInputAnswer] = useState('');

    // Test mode: choose the answer
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

    // Show score block, try again button click (start the same quiz again)
    const handleTryAgainbtnClick = ()=> {
        setShowScore(false);
        setScore(0);
        setCurrentQuestion(0);
    }

    // Hard mode: submit form after typing the asnwer in the inputBox
    const handleSubmitAnswerForm = (event) =>{
        event.preventDefault();

        let correctAnswer;
        quiz[currentQuestion].answerOptions.forEach((item)=>{
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
        else {
            let nextQuestion = currentQuestion + 1;
            if(nextQuestion < quiz.length){
                setCurrentQuestion(nextQuestion);
            }
            setInputAnswer('');
        }
    }


    return (
        <div className="main-content">
            <section className="section section--quiz">
                <div className="container">
                    <div className="section__inner">
                        <h1 className="section__title">European capitals</h1>
                        <div className="section__content">
                        {
                            showScore ? (
                                <QuizScore score={score} handleCheckAnswersBtnClick={handleCheckAnswersBtnClick} handleTryAgainbtnClick={handleTryAgainbtnClick}/>
                            ) :
                                
                            (
                                <>
                                        <QuizImage currentQuestion={currentQuestion}/>
                                        <div className="quiz__text-block">
                                            <div className="control">
                                                <h6 className="control__title">Settings</h6>
                                                <div className="control__content">
                                                    <div className="control-item">
                                                        <AnswerMode answerMode={answerMode} onToggleAnswerMode={onChangeAnswerMode}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="quiz__question">
                                                <h3 className="quiz__question-title">{currentQuestion + 1}/<span>{quiz.length}</span> {quiz[currentQuestion].questionText}</h3>
                                            </div>
                                            <div className="quiz__answer">
                                                {
                                                    answerMode ? (
                                                        <InputAnswer formAnswerSubmit={handleSubmitAnswerForm} inputAnswer={inputAnswer} setInputAnswer={setInputAnswer}/>
                                                    ) :

                                                    (
                                                        quiz[currentQuestion].answerOptions.map( (item, index) => (
                                                            <button className="btn" key={index} onClick={()=> handleAnswerClick(item.isCorrect)}>{item.answerText}</button>
                                                        ))
                                                    )      

                                                }
                                            </div>
                                            {/* <QuizAnswer answerMode={answerMode} inputAnswer={inputAnswer} currentQuestion={currentQuestion} setInputAnswer={setInputAnswer} onSubmitAnswer={handleSubmitAnswerForm} onAnswerClick={handleAnswerClick}/> */}
                                        </div>
                                </>
                            )
                        }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Quiz
