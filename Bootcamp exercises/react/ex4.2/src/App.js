import React from 'react';
import './App.css';
import Container from './components/Container';

function App() {
	return (
		<div>
			<Container
				title="title1"
				desc="desc1"
				link1="SHARE"
				link2="EXPLORE"></Container>
			<Container
				title="title2"
				desc="desc2"
				link1="SHARE"
				link2="EXPLORE"></Container>
			<Container
				title="title3"
				desc="desc3"
				link1="SHARE"
				link2="EXPLORE"></Container>
		</div>
	);
}

export default App;
