import React from 'react';
import './App.css';
import Card from './components/Card';
import Name from './components/Name';
import data from './data';
class App extends React.Component {
	state = { getNames: [], getBefore1990: [] };

	getAllNames = () => {
		return data.map((el) => el.name);
	};
	bornBefore1990 = () => {
		const obj = data.filter((el) => Number(el.birthday.slice(-4)) < 1990 && el);
		// return Object.values(obj).map((el) => {
		// 	return [
		// 		el.name,
		// 		el.birthday,
		// 		el.favoriteFoods.fish,
		// 		el.favoriteFoods.meats,
		// 	];
		// });
		console.log(obj);
		return obj;
	};
	componentDidMount() {
		this.setState({
			getNames: this.getAllNames(),
			getBefore1990: this.bornBefore1990(),
		});
	}
	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Name names={this.state.getNames}></Name>
				{this.state.getBefore1990.map((el, i) => {
					return (
						<div key={i}>
							<Card
								name={el.name}
								birth={el.birthday}
								meats={el.favoriteFoods.meats}
								fish={el.favoriteFoods.fish}></Card>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
