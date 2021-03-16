import React from 'react';
import Box from './Box';
import Button from './Button';

const Container = (props) => {
	return (
		<div className="container">
			<Button clicked={props.func}></Button>
			{props.isclicked ? <Box boxColor="box-color"></Box> : null}
		</div>
	);
};
export default Container;
