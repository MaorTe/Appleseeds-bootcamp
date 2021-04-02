import { useRef } from 'react';
import './App.css';
// @ts-ignore
import video from './videos/video.mp4';
const App = () => {
	const vidRef = useRef(null);

	const handlePlayVideo = () => {
		vidRef.current.play();
	};
	const handlePauseVideo = () => {
		vidRef.current.pause();
	};
	return (
		<div className="container">
			<video style={{ height: '500px' }} ref={vidRef}>
				<source src={video} />
			</video>
			<button onClick={handlePlayVideo}>play</button>
			<button onClick={handlePauseVideo}>pause</button>
		</div>
	);
};

export default App;
