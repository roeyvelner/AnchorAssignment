import React from "react";

export interface ButtonProps {
	btnText: string;
	onClick: () => void;
	disabled?: boolean;
}

export function Button({btnText, onClick, disabled}: ButtonProps) {
	return (
		<input className="button" disabled={disabled} type="button" value={btnText} onClick={onClick} />
	)
}