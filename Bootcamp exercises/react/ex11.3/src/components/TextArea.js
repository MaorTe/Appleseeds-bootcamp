import React from 'react';

class TextArea extends React.Component {
	render() {
		return (
			<div>
				<label htmlFor="textarea">Free Text:</label>
				<textarea
					name={this.props.name}
					id={this.props.name}
					onChange={this.props.onChange}></textarea>
			</div>
		);
	}
}

export default TextArea;
