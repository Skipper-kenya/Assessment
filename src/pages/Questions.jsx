import { Button, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
//yy
const Questions = ({ Question, setLoading }) => {
  const navigate = useNavigate();
  const [userAnswer, setUserAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  const questionsList = [
    new Question("question1", "what is your name?", userAnswer.q1),
    new Question("question2", "what is your age?", userAnswer.q2),
    new Question("question3", "what is your speciality?", userAnswer.q3),
  ];

  const [currentQuestion, setCurrentQuestion] = useState([
    { 0: true },
    { 1: false },
    { 2: false },
  ]);

  const setInputs = (e, idx) => {
    setUserAnswers((prev) => ({ ...prev, [idx]: e.target.value }));
  };

  const handleNextQuestion = (idx) => {
    if (idx < 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      setCurrentQuestion((prev) => ({
        ...prev,
        [idx]: { [idx]: false },
        [idx + 1]: { [idx + 1]: true },
      }));
    } else {
      navigate("/thanks");
      toast.success("Thank you for participating");
    }
  };
  return (
    <div className="question-wrapper">
      {questionsList?.map((question, idx) => {
        if (currentQuestion[idx][idx]) {
          return (
            <div key={idx} className="question">
              <h3>{question.name}</h3>
              <p>{question.question}</p>
              <Input
                size="large"
                placeholder="your Answer"
                onChange={(e) => setInputs(e, idx)}
              />
              <Button
                type="primary"
                size="large"
                onClick={() => handleNextQuestion(idx)}
              >
                Submit
              </Button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Questions;
