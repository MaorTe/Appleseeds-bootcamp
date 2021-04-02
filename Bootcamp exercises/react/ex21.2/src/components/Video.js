// import { useState } from 'react';
// import Buttons from '../js/Buttons.js';

// const Video =()=>{

//     const [playingVideo, setPlayingVideo] = useState(false)

// 	const playVideo=()=> {
// 		// You can use the play method as normal on your video ref
// 		// debugger;
//         setPlayingVideo(true);
// 		//this.refs.vidRef.getInternalPlayer().playVideo()
// 	}

// 	pauseVideo=()=> {
// 		// Pause as well
// 		ref.getInternalPlayer().pauseVideo();
// 	}

// 	// You can pass your function references to your child components as props (here passing down to the Buttons component)
// 	render() {
// 		return (
// 			<div>
// 				<ReactPlayer
// 					url="https://www.youtube.com/watch?v=y6HxORx0g-g"
// 					width="100%"
// 					pip={true}
// 					ref={ref}
// 					controls={true}
// 					playing={this.state.playingVideo}></ReactPlayer>

// 				<Buttons
// 					playVideo={this.playVideo.bind(this)}
// 					pauseVideo={this.pauseVideo.bind(this)}
// 				/>
// 			</div>
// 		);
// 	}
// }

// export default Video;
