import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Select from './components/Select';
import TextArea from './components/TextArea';

class App extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		age: '',
		textarea: '',
		button: '',
		continueClicked: false,
	};

	showPrevForm = () => {
		console.log('clicked');
		this.setState({ continueClicked: false });
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ continueClicked: true });
	};
	showForm = () => {
		return (
			<form onSubmit={this.handleSubmit}>
				<Input
					name="firstName"
					firstName="First Name:"
					onChange={this.handleChange}
					value={this.state.firstName}></Input>
				<Input
					name="lastName"
					lastName="Last Name:"
					onChange={this.handleChange}
					value={this.state.lastName}></Input>

				<Select onChange={this.handleChange} name="age"></Select>
				<TextArea onChange={this.handleChange} name="textarea"></TextArea>
				<Button btnName="Continue"></Button>
			</form>
		);
	};
	showReview = () => {
		return (
			<div className="review">
				<p>First Name: {this.state.firstName}</p>
				<p>Last Name: {this.state.lastName}</p>
				<p>Age: {this.state.age}</p>
				<p>Message: {this.state.textarea}</p>
				<Button
					btnName="Back"
					onChange={this.showPrevForm}
					prev={this.showForm}
				/>
				<Button onClick={() => {}} btnName="Send Survey" />
			</div>
		);
	};
	render() {
		return (
			<div>
				{(!this.state.continueClicked && this.showForm()) || this.showReview()}
			</div>
		);
	}
}

export default App;
