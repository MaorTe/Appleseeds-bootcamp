import { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
	const [isShowing, setIsShowing] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		if (isShowing) {
			ref.current.focus();
		}
	}, [isShowing]);

	return (
		<div className="container">
			<button onClick={() => setIsShowing(!isShowing)}>
				{isShowing ? 'save' : 'edit'}
			</button>
			{isShowing && (
				<div>
					<input type="text" ref={ref} />
				</div>
			)}
		</div>
	);
};

export default App;
