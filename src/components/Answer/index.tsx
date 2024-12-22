import React from "react";
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface AnswerProps {
	ansText: string;
	ansIndex: number;
	qIndex: number;
}

export function Answer({ansText, ansIndex, qIndex}: AnswerProps) {
	return (
		<FormControlLabel id={`ans-${ansIndex}-${qIndex}`} value={ansText} control={<Radio />} label={ansText} />
	)
}