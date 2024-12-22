export type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
};

export type QuizData = Question[];