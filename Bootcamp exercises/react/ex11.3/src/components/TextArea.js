import React from 'react';

class TextArea extends React.Component {
	render() {
		return (
			<div>
				<label htmlFor="textarea">Free Text:</label>
				<textarea name="textarea" id="textarea"></textarea>
			</div>
		);
	}
}

export default TextArea;
