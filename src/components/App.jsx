import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
// import components here

function App() {
  const [answerState, setAnswerState] = useState("unanswered");

  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Question question={data.question.question_text} />
      <Answer answer={data.question.choices[0]} />
      <Answer answer={data.question.choices[1]} />
      <Answer answer={data.question.choices[2]} />
      <Answer answer={data.question.choices[3]} />
      <button
        onClick={() =>
          setAnswerState(
            data.question.choices[data.question.correct_choice_index]
          )
        }
      >
        Click for the correct answer
      </button>
      The correct answer is {answerState}
    </div>
  );
}

function Question(props) {
  return <div>{props.question}</div>;
}

function Answer(props) {
  return <div>{props.answer}</div>;
}

export default App;
