import React from 'react';
const Name = ({ names }) => {
	return names.map((name, i) => {
		return <div key={i}>{name}</div>;
	});
};

export default Name;
