import React from "react";
import { Title } from "../Title";

export interface ScoresProps {
	score: number;
}

export function Score({score}: ScoresProps) {
	return (
		<>
			<Title text={"Scores"} />
			<h2>Your score is:</h2>
			<h1>{score}</h1>
		</>
	)
}