import React from 'react';
import './App.css';
import { Quiz } from './components/Quiz';
import { QuizData } from './interfaces/quiz';

//got quiz data example from chatGpt
export const quizData: QuizData = [
	{
	  id: 1,
	  text: 'What is the capital of France?',
	  options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
	  correctAnswer: 'Paris',
	},
	{
	  id: 2,
	  text: 'What is 2 + 2?',
	  options: ['3', '4', '5', '6'],
	  correctAnswer: '4',
	},
	{
	  id: 3,
	  text: 'Which planet is known as the Red Planet?',
	  options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
	  correctAnswer: 'Mars',
	},
	{
	  id: 4,
	  text: 'Who wrote "To Kill a Mockingbird"?',
	  options: ['Harper Lee', 'J.K. Rowling', 'Ernest Hemingway', 'Mark Twain'],
	  correctAnswer: 'Harper Lee',
	},
	{
	  id: 5,
	  text: 'What is the largest mammal?',
	  options: ['Elephant', 'Blue Whale', 'Giraffe', 'Great White Shark'],
	  correctAnswer: 'Blue Whale',
	},
  ];
function App() {
	return (
		<div className="App">
			<div className="container">
    			<Quiz quizData={quizData} />
			</div>
    	</div>
  	);
}

export default App;
