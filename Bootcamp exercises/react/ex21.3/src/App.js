import React from 'react';
import './App.css';
import ImageRef from './components/ImageRef';
import cat1 from './img/cat1.jpg';
import cat1BW from './img/cat1BW.jpg';
import cat2 from './img/cat2.jpg';
import cat2BW from './img/cat2BW.jpg';

const App = () => {
	return (
		<div className="container">
			<ImageRef img={cat1} imgBW={cat1BW}></ImageRef>
			<ImageRef img={cat2} imgBW={cat2BW}></ImageRef>
		</div>
	);
};

export default App;
