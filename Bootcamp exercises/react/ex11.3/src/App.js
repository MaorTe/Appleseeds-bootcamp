import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Select from './components/Select';
import TextArea from './components/TextArea';

class App extends React.Component {
	state = { form: '', continueClicked: false };
	render() {
		return !this.state.continueClicked ? (
			<form>
				<Input name="First Name:"></Input>
				<Input name="Last Name:"></Input>
				<Select></Select>
				<TextArea></TextArea>
				<Button btnName="Continue"></Button>
			</form>
		) : (
			this.setState({ continueClicked: true })
		);
	}
}

export default App;
