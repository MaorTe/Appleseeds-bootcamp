//Import the React and ReactDOM libraries
import React from 'react';
import './App.css';
import Box1 from './components/Box1';
//Create a react component
const App = function () {
	return (
		<div className="container">
			<Box1 />
		</div>
	);
};

export default App;
