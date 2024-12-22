import React from "react";

export interface TitleProps {
	text: string;
}

export function Title({ text }: TitleProps) {
	return (
		<h1>{text}</h1>
	)
}