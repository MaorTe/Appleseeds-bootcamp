import React from 'react';

const ListItem = (props) => {
	const [checked, setChecked] = React.useState(props.item.isChecked);

	const checkItem = () => {
		setChecked(!checked);
		props.onCheckboxChange(props.item.id);
	};

	return (
		<li>
			<input
				type="checkbox"
				checked={props.item.isChecked}
				onChange={() => checkItem()}
			/>
			<label>{props.item.name}</label>
		</li>
	);
};
export default ListItem;
