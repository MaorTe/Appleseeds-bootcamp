import React from 'react';

class Button extends React.Component {
	render() {
		if (this.props.showPrevForm) {
			return (
				<div>
					<input
						type="submit"
						value={this.props.btnName}
						// onClick={this.onClick}
						onChange={this.props.onChange}
					/>
				</div>
			);
		}
		return (
			<div>
				<button onClick={this.props.onChange}>{this.props.btnName}</button>
			</div>
		);
	}
}

export default Button;
