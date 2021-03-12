import React from "react";

const AnswerMode = (props) => {
  // console.log(answerMode)
  return (
    <label className="check" htmlFor="checkbox">
        <p className="check__text">Hard mode</p>
        <input id="checkbox" className="check__input" type="checkbox" onChange={props.onToggleAnswerMode} checked={props.answerMode}/>
        <span className="check__slider"></span>
    </label>
  );
};

export default AnswerMode;
