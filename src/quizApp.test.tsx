import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App, { quizData } from './App';


describe('QuizApp', () => {
	test('renders the first question correctly', () => {
		render(<App />);
			expect(screen.getByText(quizData[0].text)).toBeInTheDocument();
			quizData[0].options?.forEach(option => {
				expect(screen.getByText(option)).toBeInTheDocument();
			});
	});
  
	test('disables Next button until an option is selected', () => {
		render(<App />);
		const nextButton = screen.getByText('next');
		expect(nextButton).toBeDisabled();
	
		const option = screen.getByText('Paris');
		fireEvent.click(option);
	
		expect(nextButton).not.toBeDisabled();
	});
  
	test('navigates to the next question on clicking Next', () => {
		render(<App />);
		const option = screen.getByText('Paris');
		fireEvent.click(option);
	
		const nextButton = screen.getByText('next');
		fireEvent.click(nextButton);
	
		expect(screen.getByText(/What is 2 \+ 2?/i)).toBeInTheDocument();
	});
  
	test('calculates and displays the correct score on Submit', () => {
		render(<App />);

		fireEvent.click(screen.getByText('Paris'));
		fireEvent.click(screen.getByText('next'));
		fireEvent.click(screen.getByText('4'));
		fireEvent.click(screen.getByText('next'));
		fireEvent.click(screen.getByText('Mars'));
		fireEvent.click(screen.getByText('next'));
		fireEvent.click(screen.getByText('Harper Lee'));
		fireEvent.click(screen.getByText('next'));
		fireEvent.click(screen.getByText('Blue Whale'));
	
		const submitButton = screen.getByText('Submit');
		fireEvent.click(submitButton);
	
		expect(screen.getByText(/Your score is:/i)).toBeInTheDocument();
		expect(screen.getByText(/100/i)).toBeInTheDocument();
	});
  
	test('displays the Previous button after the first question', () => {
		render(<App />);
		const option = screen.getByText('Paris');
		fireEvent.click(option);
	
		const nextButton = screen.getByText('next');
		fireEvent.click(nextButton);
	
		const previousButton = screen.getByText('prev');
		expect(previousButton).toBeInTheDocument();
	});
  });