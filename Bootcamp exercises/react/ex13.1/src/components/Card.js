import React from 'react';

class Card extends React.Component {
	render() {
		return (
			<div>
				<div className="card">
					<h2>{this.props.name}</h2>
					<h4>Birthday: {this.props.birth}</h4>
					<p>Favorite Foods:</p>
					<p>Meats: {this.props.meats.join(', ')}</p>
					<p>Fish: {this.props.fish.join(', ')}</p>
				</div>
			</div>
		);
	}
}
export default Card;
