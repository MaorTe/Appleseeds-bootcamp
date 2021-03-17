import React from 'react';
import './App.css';
import MusicAlbum from './components/MusicAlbum';

class App extends React.Component {
	state = { show: true };
	componentDidMount() {
		setTimeout(() => this.setState({ show: false }), 5000);
	}

	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<MusicAlbum
					img="https://p7.hiclipart.com/preview/685/750/357/logo-angel-wings.jpg"
					albumTitle="ועכשיו לחלק האינטרגלקטי"
					artist="טונה"
					length="46m"
					link="https://www.youtube.com/watch?v=Rx_LL_k4JuY"
					topSongName="כנפיים"
				/>

				<MusicAlbum
					img="https://st4.depositphotos.com/1377864/20157/i/1600/depositphotos_201579776-stock-photo-simple-suspension-bridge-background.jpg"
					albumTitle="One Day Remains"
					artist="Alter Bridge"
					length="55m"
					link="https://www.youtube.com/watch?v=N-I8ALlYxdY"
					topSongName="Metalingus"
				/>

				<MusicAlbum
					img="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
					albumTitle="Swimming"
					link="https://www.youtube.com/watch?v=SsKT0s5J8ko"
					topSongName="Self Care"
				/>

				<MusicAlbum />
			</div>
		);
	}
}
export default App;
