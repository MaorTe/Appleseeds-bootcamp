import React from 'react';
import './App.css';
import Button from './components/Button';
function App() {
	return (
		<div className="container">
			<Button
				btnText="Important"
				style={{ fontWeight: 'bold', marginRight: '10px' }}></Button>
			<Button btnText="Not Important"></Button>
		</div>
	);
}

export default App;
