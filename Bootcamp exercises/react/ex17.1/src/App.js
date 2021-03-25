import React from 'react';
import './App.css';
import api from './api/api.js';
class App extends React.Component {
	state = { users: [] };
	async componentDidMount() {
		const response = await api.get(`/users`);
		this.setState({ users: response });
		setTimeout(() => {
			console.log(this.state.users);
		}, 300);
	}
	render() {
		console.log(this.state.users);
		return <div></div>;
	}
}

export default App;
