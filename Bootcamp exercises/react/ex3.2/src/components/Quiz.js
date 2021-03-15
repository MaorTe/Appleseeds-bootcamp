import React from 'react';
import Q1 from './Q1';
import Q2 from './Q2';
import QuizTitle from './QuizTitle';

const Quiz = () => {
	return (
		<div className="container">
			<QuizTitle></QuizTitle>
			<Q1></Q1>
			<Q2></Q2>
		</div>
	);
};
export default Quiz;
