import React from 'react';
import './App.css';
import CustomButton from './components/CustomButton';

const colors = ['blue', 'red', 'yellow'];
class App extends React.Component {
	state = { color: '' };
	onButtonClick = (e) => {
		this.setState({ color: e.target.value });
		console.log(e.target.value);
	};

	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', width: '150px' }}>
				{colors.map((btn, i) => {
					return (
						<div>
							<CustomButton
								color={colors[i]}
								btn={btn}
								click={this.onButtonClick}></CustomButton>
						</div>
					);
				})}
				<div>The color selected is:{this.state.color}</div>
			</div>
		);
	}
}

export default App;
