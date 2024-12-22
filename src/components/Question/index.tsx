import React from "react";
import RadioGroup from '@mui/material/RadioGroup';
import { Question as QuestionData } from "../../interfaces/quiz";
import { Title } from "../Title";
import { Answer } from "../Answer";

export interface QuestionProps {
	questionData: QuestionData;
	setAnswer: (ans: string) => void;
	currentAns: string | null;
}

export function Question({questionData, setAnswer, currentAns}: QuestionProps) {

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAnswer((event.target as HTMLInputElement).value);
	};

	return (
		<>
			<Title text={`Question ${questionData.id}`} />
			<QuestionText text={questionData.text} />
			<div style={{ alignItems: "center", display: "flex", flexDirection: "column"}}>
				<div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column" }}>
					<RadioGroup name={`radio-buttons-group-${questionData.id}`} value={currentAns} onChange={handleChange}>
						{	
							questionData.options.map((option, index) => <Answer key={index} ansText={option} qIndex={questionData.id} ansIndex={index} />)
						}
					</RadioGroup>
				</div>
			</div>
		</>
	)

}

function QuestionText({ text }: { text: string }) {
	return (
		<p className="question">{text}</p>
	)
}