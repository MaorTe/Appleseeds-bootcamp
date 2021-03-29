import { useState } from 'react';
import './App.css';

const App = () => {
	const [time, setTime] = useState(60);
	const handleChange = (e) => {
		setTime(e.target.value);
	};
	return (
		<div className="container">
			<label>
				Seconds:
				<input
					type="number"
					name="name"
					placeholder="seconds"
					value={time}
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<label>
				Minutes:
				<input
					type="number"
					name="name"
					placeholder="minutes"
					value={time / 60}
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<label>
				Hours:
				<input
					type="number"
					name="name"
					placeholder="hours"
					value={time / 60 / 60}
					onChange={(e) => handleChange(e)}
				/>
			</label>
		</div>
	);
};

export default App;
