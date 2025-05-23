import React from 'react';
import styled from 'styled-components';
import { type AnswerObject } from '../App';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const Card = styled.div`
  margin: 1rem 0;
`;

const QuestionText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const ButtonWrapper = styled.div<{ correct: boolean; userClicked: boolean }>`
  button {
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
        : userClicked
        ? 'linear-gradient(90deg, #ff5656, #c16868)'
        : 'linear-gradient(90deg, #e0e0e0, #d0d0d0)'};
    border: 1px solid #999;
    margin: 0.5rem 0;
    padding: 10px;
    width: 100%;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    color: black;
  }
`;

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <Card>
      <p>
        Question {questionNumber} / {totalQuestions}
      </p>
      <QuestionText dangerouslySetInnerHTML={{ __html: question }} />

      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={!!userAnswer}
            value={answer}
            onClick={callback}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </ButtonWrapper>
      ))}
    </Card>
  );
};

export default QuestionCard;
