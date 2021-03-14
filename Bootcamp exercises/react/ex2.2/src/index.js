//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

const data = ['hello', 'world'];
const number1 = 5;
const number2 = 6;
const string = 'I love React!';
//Create a react component
const App = function () {
	return (
		<div>
			<div>{`${data[0]} ${data[1]}`}</div>
			<div>{`${number1} + ${number2} = ${number1 + number2}`}</div>
			<div>{`The string’s length is ${string.length}`}</div>
		</div>
	);
};
//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
