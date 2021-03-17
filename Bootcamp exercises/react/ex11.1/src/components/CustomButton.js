import React from 'react';

// class CustomButton extends React.Component {
// 	state = { color: '' };

// 	clicked = () => {
// 		console.log(this.props.onClicked(this.state.color));
// 	};
// 	render() {
// 		return (
// 			<button
// 				style={{ background: this.props.color }}
// 				className={this.props.btn}
// 				value={this.state.color}
// 				// onClick={(e) => this.setState({ color: e.target.value })}>
// 				onClick={this.props.onClicked(this.state.color)}>
// 				{this.props.color}
// 			</button>
// 		);
// 	}
// }
const CustomButton = (props) => {
	return (
		<button
			style={{ background: props.color }}
			className={props.btn}
			value={props.color}
			onClick={props.click}>
			{props.color}
		</button>
	);
};
export default CustomButton;
