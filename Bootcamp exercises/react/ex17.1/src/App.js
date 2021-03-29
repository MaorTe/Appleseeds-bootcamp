import React from 'react';
import './App.css';
import API from './api/api.js';
import Card from './components/Card.component copy';
import Input from './components/Input.component';
class App extends React.Component {
	state = { data: [], errorMsg: '', isLoading: false };

	//async function WONT patch all setStates together, under the hood behavior of React
	async componentDidMount() {
		this.setState({ isLoading: true });
		try {
			const { data } = await API.get(`/users`);
			this.setState({ data });
		} catch (e) {
			this.setState({ errorMsg: e.message });
		}
	}

	// ----------Create----------
	create = async (value) => {
		try {
			if (value.name.length < 6) {
				throw new Error('must be more than 5 letters');
			}
			const newItem = { name: value.name };
			const { data } = await API.post(`/users`, newItem);
			//must mutate the copy to avoid a bug
			this.setState((state) => {
				return { data: [...state.data, data] };
			});
		} catch (e) {
			this.setState({ errorMsg: e.message });
		}
	};

	// ----------Delete----------
	delete = async (id) => {
		await API.delete(`/users/${id}`);
		this.setState({
			data: [...this.state.data].filter((el) => el.id !== id),
		});
	};

	// ----------Update----------
	update = async (value, id) => {
		const updatedItem = {
			name: value.updatedName,
		};
		//in  Update we update the API...
		const { data } = await API.put(`users/${id}`, updatedItem);
		//and also the state...
		const index = this.state.data.findIndex((el) => el.id === id);
		const newItems = [...this.state.data];
		newItems[index] = data;
		this.setState({ data: newItems });
	};
	render() {
		return (
			<div>
				{this.state.data.map((el) => {
					return (
						<div key={el.id}>
							<Card data={el}></Card>
							<Input
								type="updatedName"
								onChange={this.update}
								id={el.id}></Input>
							<button onClick={() => this.delete(el.id)}>Delete</button>
						</div>
					);
				})}
				<Input type="name" onChange={this.create} />
				{<h3 style={{ color: 'red' }}>{this.state.errorMsg}</h3>}
			</div>
		);
	}
}

export default App;
