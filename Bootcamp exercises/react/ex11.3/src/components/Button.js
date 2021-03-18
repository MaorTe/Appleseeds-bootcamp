import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<div>
				{/* <label htmlFor="input"></label> */}
				<input type="button" value={this.props.btnName} />
			</div>
		);
	}
}

export default Button;
