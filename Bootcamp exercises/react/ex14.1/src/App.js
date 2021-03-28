import React from 'react';
import './App.css';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}
	componentDidMount() {
		this.inputRef.current.focus();
	}
	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} defaultValue="aaa" />
			</div>
		);
	}
}

export default App;
