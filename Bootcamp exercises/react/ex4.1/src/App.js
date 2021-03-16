import React from 'react';
import './App.css';
import Button from './components/Button';
function App() {
	return (
		<div className="container">
			<Button btnText="Important" btnWeight="bold"></Button>
			<Button btnText="Not Important"></Button>
		</div>
	);
}

export default App;
