import React from 'react';
import './App.css';

class App extends React.Component {
	state = { aa: true };

	render() {
		return (
			<div className="wrapper clearfix">
				<div className="player-0-panel active">
					<div className="player-name" id="name-0">
						Player 1
					</div>
					<div className="player-score" id="score-0">
						0
					</div>
					<div className="player-current-box">
						<div className="player-current-label">Current</div>
						<div className="player-current-score" id="current-0">
							0
						</div>
					</div>
				</div>

				<div className="player-1-panel">
					<div className="player-name" id="name-1">
						Player 2
					</div>
					<div className="player-score" id="score-1">
						0
					</div>
					<div className="player-current-box">
						<div className="player-current-label">Current</div>
						<div className="player-current-score" id="current-1">
							0
						</div>
					</div>
				</div>

				<button className="btn-new">
					<i className="ion-ios-plus-outline"></i>New game
				</button>
				<button className="btn-roll">
					<i className="ion-ios-loop"></i>Roll dice
				</button>
				<button className="btn-hold">
					<i className="ion-ios-download-outline"></i>Hold
				</button>

				<img src="./img/dice-1.png" alt="Dice" className="dice hidden" />
				<img src="./img/dice-1.png" alt="Dice" className="dice dice-2 hidden" />

				<div className="input-wrapper">
					<span className="input-wrapper-desc">Score to collect:</span>
					<input
						type="text"
						className="score-input"
						id="finalScoreInput"
						value="100"
					/>
				</div>
				<a href="#" className="help">
					<i className="ion-help-circled"></i>
				</a>
			</div>
		);
	}
}

export default App;
