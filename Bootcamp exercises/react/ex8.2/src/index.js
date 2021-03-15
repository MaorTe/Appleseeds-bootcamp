//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = function () {
	return (
		<div>
			<div>Hi there! </div>
			<div>
				<a href="#">Click Me</a>
			</div>
		</div>
	);
};
//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
