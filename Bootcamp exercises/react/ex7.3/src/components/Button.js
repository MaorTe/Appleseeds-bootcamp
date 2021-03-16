const Button = (props) => {
	return (
		<button className="btn" onClick={props.clicked}>
			{props.name}
		</button>
	);
};
export default Button;
