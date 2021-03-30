import React from 'react';

class Avatar extends React.Component {
	render() {
		return (
			<div style={{ border: '1px solid black', margin: '15px' }}>
				<h2 style={{ margin: '10px' }}>{this.props.name}</h2>
				<img
					style={{ width: '300px', height: '300px' }}
					src={this.props.src}
					alt=""
				/>
			</div>
		);
	}
}
export default Avatar;
