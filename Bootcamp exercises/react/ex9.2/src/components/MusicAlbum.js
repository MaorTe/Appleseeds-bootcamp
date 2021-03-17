import React from 'react';

const MusicAlbum = (props) => {
	return (
		<div className="album-container">
			<img src={props.img} alt="" />
			<div className="info">
				<h2>{props.albumTitle}</h2>
				<span>{props.artist}</span>
			</div>
			<div className="meta">
				<span>
					Popular Song: <a href={props.link}>{props.topSongName}</a>
				</span>
				<span>Length: {props.length}</span>
			</div>
		</div>
	);
};

MusicAlbum.defaultProps = {
	img:
		'https://www.soleneve.it/_sito_nuovo_wp/wp-content/uploads/2018/04/california-850x600.jpg',
	albumTitle: 'Californication',
	artist: 'Red Hot Chilli Peppers',
	length: '56m',
	link: 'https://www.youtube.com/watch?v=YlUKcNNmywk',
	topSongName: 'Californication',
};

export default MusicAlbum;
