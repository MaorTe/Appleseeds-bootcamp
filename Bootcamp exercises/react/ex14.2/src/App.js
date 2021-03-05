import React from 'react';
import './App.css';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.textareaRef = React.createRef();
	}
	componentDidMount() {
		// this.textareaRef.current.focus();
	}
	render() {
		return (
			<div className="container">
				<h1 style={{ color: '#fff' }}>What is the meaning of life?</h1>

				<textarea
					ref={this.textareaRef}
					name="copyText"
					id="copyText"
					cols={30}
					rows={10}></textarea>

				<button
					style={{ marginTop: '10px' }}
					onClick={() => {
						this.textareaRef.current.select();
						document.designMode = 'on';
						document.execCommand('copy');
					}}>
					Copy
				</button>
			</div>
		);
	}
}

export default App;
