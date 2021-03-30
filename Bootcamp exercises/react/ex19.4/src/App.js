import React, { useEffect, useState } from 'react';
import './App.css';
import pics from './api/pics';
import SearchBar from './components/SearchBar';
import Avatar from './components/Avatar';
import Button from './components/Button';
const App = () => {
	// state = { search: '', filtered: [] };

	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState('');
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = (await pics.get(`api?results=10`)).data.results;
			setUsers(response);
		};
		fetchData();
	}, []);
	const createAvatar = (filtered) => {
		return (filtered ? filtered : users).map((el, i) => {
			return (
				<div key={i}>
					<Avatar
						name={`${el.name.first} ${el.name.last}`}
						src={el.picture.large}></Avatar>
				</div>
			);
		});
	};
	const onSearchSubmit = (e) => {
		setSearch(e.target.value);

		const query = users.filter((user) => {
			return `${user.name.first} ${user.name.last}`
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});
		console.log(query);
		createAvatar(query);
		setFiltered(query);
	};
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
				onChange={onSearchSubmit}
				value={search}
				name="search"></SearchBar>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}>
				{filtered.length > 0 ? createAvatar(filtered) : createAvatar()}
			</div>
		</div>
	);
};

export default App;
