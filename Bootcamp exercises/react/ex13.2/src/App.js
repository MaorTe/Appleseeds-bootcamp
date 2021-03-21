import React from 'react';
import './App.css';
import pics from './api/pics';
import SearchBar from './components/SearchBar';
import Avatar from './components/Avatar';
import Button from './components/Button';
class App extends React.Component {
	state = { users: [], search: '', filtered: [] };
	fetchData = async () => {
		const response = (await pics.get(`api?results=10`)).data.results;
		this.setState({ users: response });
	};
	componentDidMount() {
		this.fetchData();
		setTimeout(() => {
			console.log(this.state.users);
		}, 300);
	}
	createAvatar = (filtered) => {
		return (filtered ? filtered : this.state.users).map((el, i) => {
			return (
				<div key={i}>
					<Avatar
						name={`${el.name.first} ${el.name.last}`}
						src={el.picture.large}></Avatar>
				</div>
			);
		});
	};
	onSearchSubmit = (e) => {
		this.setState({ [e.target.name]: e.target.value });

		const query = this.state.users.filter((user) => {
			return `${user.name.first} ${user.name.last}`
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});
		console.log(query);
		this.createAvatar(query);
		this.setState({ filtered: query });
	};
	render() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}>
				<Button></Button>
				<SearchBar
					onChange={this.onSearchSubmit}
					value={this.state.search}
					name="search"></SearchBar>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'wrap',
					}}>
					{this.state.filtered.length > 0
						? this.createAvatar(this.state.filtered)
						: this.createAvatar()}
				</div>
			</div>
		);
	}
}

export default App;
