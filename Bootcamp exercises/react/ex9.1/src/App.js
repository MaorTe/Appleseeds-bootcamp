import React from 'react';
import './App.css';
import Spinner from './components/Spinner';
// import Spinner from './Spinner'
class App extends React.Component {
	state = { isActive: true };

	render() {
		const countDown = () => {
			setTimeout(() => {
				this.setState({ isActive: false });
			}, 4000);
		};
		countDown();
		return this.state.isActive && <Spinner></Spinner>;
	}
}
export default App;
