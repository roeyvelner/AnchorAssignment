import React, { useCallback, useMemo, useState } from "react";
import { QuizData } from "../../interfaces/quiz";
import { Question } from "../Question";
import { Button } from "../Button";
import { Score } from "../Score/Score";

export interface QuizProps  {
	quizData: QuizData;
}

export function Quiz({quizData}: QuizProps) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState<(string | null)[]>(Array(quizData.length).fill(null));
	const [score, setScore] = useState<number | null>(null);

	const currentQuestion = useMemo(() => quizData[currentQuestionIndex], [quizData, currentQuestionIndex]);

	const setAnswer = useCallback((ans: string) => {
		setAnswers((prev) => {
			const updatedAnswers = [...prev];
			updatedAnswers[currentQuestionIndex] = ans;
			return updatedAnswers;
		});
	}, [currentQuestionIndex, setAnswers]);

	const onPrevClick = useCallback(() => {
		setCurrentQuestionIndex(prev => prev === 0 ? prev : prev - 1);
	}, [setCurrentQuestionIndex]);
	const onNextClick = useCallback(() => {
		if (currentQuestionIndex === quizData.length - 1) {
			handleSubmit();
		}
		else {
			setCurrentQuestionIndex(prev => prev + 1);
		}
	}, [quizData, setCurrentQuestionIndex, currentQuestionIndex, answers]);

	const handleSubmit = useCallback(() => {
		const calculatedScore = answers.reduce((total, answer, index) => {
			return answer === quizData[index].correctAnswer ? total + 20 : total;
		}, 0);
		setScore(calculatedScore);
	},[answers]);

	const resetQuiz = useCallback(() => {
		setScore(null);
		setAnswers(Array(quizData.length).fill(null));
		setCurrentQuestionIndex(0);
	}, [setScore, setAnswers, setCurrentQuestionIndex]);

	return (
		<>
			{
				score === null ? (
					<>
						<Question questionData={currentQuestion} setAnswer={setAnswer} currentAns={answers[currentQuestionIndex]} />
						<div>
							{!!(currentQuestionIndex != 0) && <Button onClick={onPrevClick} btnText="prev" />}
							<Button disabled={!answers[currentQuestionIndex]} onClick={onNextClick} btnText={currentQuestionIndex === quizData.length - 1 ? "Submit" : "next"} />
						</div>
					</>
				)
				:
					<>
						<Score score={score}/>
						<Button btnText={"new quiz"} onClick={()=> resetQuiz()} />
					</>
			}
		</>
	);
}