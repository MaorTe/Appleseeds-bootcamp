//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './components/Quiz';
import './index.css';

//Create a react component
const App = function () {
	return <Quiz></Quiz>;
};
//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
