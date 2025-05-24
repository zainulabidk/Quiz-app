import styled, { keyframes } from 'styled-components';


export const AppWrapper = styled.div`
  background-image: url('/assets/images/quiz-bg.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuizContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 90%;
  text-align: center;
`;

export const Button = styled.button`
margin:15px;
  margin-top: 1rem;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  background: linear-gradient(135deg, #0ec6c2, #0aafac);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #0aa7a4, #088b89);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #0ec6c2, #0aafac);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeInUp} 0.6s ease-out;
`;

export const Score = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0ec6c2;
  background: rgba(14, 198, 194, 0.1);
  border-left: 5px solid #0ec6c2;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  max-width: 300px;
  margin: 1rem auto;
  text-align: center;
`;

export const Dropdown = styled.select`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  background: linear-gradient(135deg, #0ec6c2, #0aafac);
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  appearance: none;

  &:hover {
    background: linear-gradient(135deg, #0aa7a4, #088b89);
  }

  option {
    color: black;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-top: 1rem;
  color: #333;
`;