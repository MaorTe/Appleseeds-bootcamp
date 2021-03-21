import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
	state = { joke: '', categories: [], categoryJoke: '' };

	componentDidMount() {
		this.fetchCategories();
	}

	fetchCategories = async () => {
		const response = await axios.get(
			'https://api.chucknorris.io/jokes/categories'
		);
		this.setState({ categories: response.data });
	};

	onButtonClicked = async () => {
		const response = await axios.get('https://api.chucknorris.io/jokes/random');
		this.setState({ joke: response.data.value });
	};

	handleCategoryChosen = async (str) => {
		const response = await axios.get(
			`https://api.chucknorris.io/jokes/random?category=${str}`
		);
		this.setState({ categoryJoke: response.data.value });
	};

	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<button onClick={this.onButtonClicked}>Click Here</button>
				<p>{this.state.joke}</p>
				{this.state.categories.map((el) => (
					<button onClick={() => this.handleCategoryChosen(el)}>{el}</button>
				))}
				<div>{this.state.categoryJoke}</div>
			</div>
		);
	}
}

export default App;
