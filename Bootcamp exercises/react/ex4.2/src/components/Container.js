import Description from './Description';
import Img from './Img';
import Link from './Link';
import Title from './Title';
import faker from 'faker';
const Container = (props) => {
	return (
		<div className="container">
			<Img src={faker.image.avatar()}></Img>
			<Title title={props.title}></Title>
			<Description desc={props.desc}></Description>
			<Link link1={props.link1}></Link>
			<Link link1={props.link2}></Link>
		</div>
	);
};

export default Container;
