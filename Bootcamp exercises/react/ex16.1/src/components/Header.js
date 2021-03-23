import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Link to="/">home</Link>
			<Link to="/products">products</Link>
		</div>
	);
};
export default Header;
