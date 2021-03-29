import { useState } from 'react';

const Paragraph = ({ text, maxLength }) => {
	const [hidden, setHidden] = useState(true);

	if (text.length <= maxLength) {
		return <span>{text}</span>;
	}

	return (
		<span>
			{hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
			{hidden ? (
				<a onClick={() => setHidden(false)}> Read more</a>
			) : (
				<a onClick={() => setHidden(true)}> Show less</a>
			)}
		</span>
	);
};
export default Paragraph;
