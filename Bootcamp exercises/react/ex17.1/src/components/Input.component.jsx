import React from 'react';

class Input extends React.Component {
	state = { updatedName: '' };
	handleSubmit = () => {
		this.props.onChange(this.state, this.props.id);
	};
	handleOnChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<div>
				<label htmlFor={this.props.type}></label>
				<input
					type="text"
					id={this.props.type}
					name={this.props.type}
					placeholder={this.props.type}
					value={this.props.value}
					onChange={this.handleOnChange}
				/>
				<button onClick={this.handleSubmit}>Submit</button>
			</div>
		);
	}
}
export default Input;
