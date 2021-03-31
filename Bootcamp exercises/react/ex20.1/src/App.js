import React, { useEffect, useState } from 'react';
import './App.css';
import DataContainer from './components/DataContainer';

const App = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="container">
			<button onClick={() => setToggle((toggle) => !toggle)}>
				{toggle ? 'Hide' : 'Show'}
			</button>
			{toggle && <DataContainer />}
		</div>
	);
};

export default App;
