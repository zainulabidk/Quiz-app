export const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5);
};
// export const formatQuestion = (question: string) => {
//     return question.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
// }; 