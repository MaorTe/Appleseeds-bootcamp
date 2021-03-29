import React from 'react';
import './App.css';
import Paragraph from './components/Paragraph';

class App extends React.Component {
	render() {
		return (
			<div>
				<Paragraph
					text={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus commodi quidem voluptas est consectetur, doloribus quasi eaque. Id eligendi voluptate esse! In neque quis sit error debitis eveniet, dolorum veniam voluptatem earum quo eaque est beatae assumenda quae esse eos adipisci. Sapiente quae delectus sint non cumque fugiat recusandae.`}
					maxLength={50}
				/>
			</div>
		);
	}
}

export default App;
