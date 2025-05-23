import { shuffleArray } from "./utils";

export type Difficulty = "easy" | "medium" | "hard";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: Difficulty;
    question: string;
    type: string;
    incorrect_answers: string[];
};

export type QuestionState = Question & {
    answers: string[];
};

export const FetchQuizQustions = async (
    amount: number,
    difficulty: Difficulty
): Promise<any[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(endpoint);
    const data = await response.json();
    // console.log("data",data.results);
    
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
            question: question.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'"  
            ),
        }
    ));
}

