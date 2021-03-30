import React from 'react';

class SearchBar extends React.Component {
	render() {
		return (
			<div style={{ margin: '15px' }}>
				<input
                    name={this.props.name}
					type="text"
					value={this.props.value}
					onChange={this.props.onChange}
				/>
			</div>
		);
	}
}
export default SearchBar;
