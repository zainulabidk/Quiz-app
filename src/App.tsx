import React, { useState } from 'react';
import {
  AppWrapper,
  QuizContainer,
  Button,
  Title,
  // Dropdown,
  // Label,
  Score
} from './styled/GlobalStyle';
import QuestionCard from './components/QustionCard';
import { FetchQuizQustions, type QuestionState } from './API';
import './App.css';
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  // const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');

  const resetQuizState = () => {
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
  };

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await FetchQuizQustions(TOTAL_QUESTIONS, 'medium');
    setQuestions(newQuestions);
    resetQuizState();
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const selectedAnswer = e.currentTarget.value;
      const correct = questions[number].correct_answer === selectedAnswer;

      if (correct) setScore(prev => prev + 1);

      const answerObj: AnswerObject = {
        question: questions[number].question,
        answer: selectedAnswer,
        correct,
        correctAnswer: questions[number].correct_answer
      };

      setUserAnswers(prev => [...prev, answerObj]);
    }
  };

  const nextQuestion = () => {
    const next = number + 1;
    if (next === TOTAL_QUESTIONS) setGameOver(true);
    else setNumber(next);
  };

  return (
    <AppWrapper>
      <QuizContainer>
        <Title>React Quiz</Title>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <>
            <Score>Your Score: {score}</Score>
            <Button onClick={startTrivia}>Start</Button>
          </>
        ) : null}

        {loading && <Title>Loading Questions...</Title>}

        {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <Button onClick={nextQuestion}>Next Question</Button>
          )}
      </QuizContainer>
    </AppWrapper>
  );
};

export default App;
