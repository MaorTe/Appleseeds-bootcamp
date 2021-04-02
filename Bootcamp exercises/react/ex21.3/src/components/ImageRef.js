import { useRef } from 'react';

const ImageRef = ({ img, imgBW }) => {
	const imageRef = useRef(null);
	return (
		<img
			style={{ height: '500px', width: '500px', marginLeft: '30px' }}
			src={img}
			onMouseOver={() => (imageRef.current.src = img)}
			onMouseOut={() => (imageRef.current.src = imgBW)}
			ref={imageRef}
			alt=""
		/>
	);
};
export default ImageRef;
