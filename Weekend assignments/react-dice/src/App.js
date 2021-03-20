import React from 'react';
import './App.css';
import PlayerPanel from './components/PlayerPanel';
import Button from './components/Button';
import DiceImage from './components/DiceImage';
import dice1 from './img/dice-1.png';
import dice2 from './img/dice-2.png';
import dice3 from './img/dice-3.png';
import dice4 from './img/dice-4.png';
import dice5 from './img/dice-5.png';
import dice6 from './img/dice-6.png';
import ScoreInput from './components/ScoreInput';
class App extends React.Component {
	state = {
		disabledPanel: '',
		activePanel: 'active',
		turnSwapped: true,
		GameStarted: false,
		scoreP1: 0,
		scoreP2: 0,
		currentScoreP1: 0,
		currentScoreP2: 0,
		randNum1: 1,
		randNum2: 1,
		images: [dice1, dice2, dice3, dice4, dice5, dice6],
		scoreLimit: 100,
	};

	componentDidMount() {
		//save initial state for new game
		this.initialState = this.state;
	}

	renderNewGame = () => {
		return (
			<div className="wrapper clearfix">
				<PlayerPanel
					classes={`player-0-panel ${this.state.activePanel}`}
					nameId="name-0"
					scoreId="score-0"
					currentId="current-0"
					playerName="Player 1"
					score={this.state.scoreP1}
					currentScore={this.state.currentScoreP1}></PlayerPanel>
				<PlayerPanel
					classes={`player-1-panel ${this.state.disabledPanel}`}
					nameId="name-1"
					scoreId="score-1"
					currentId="current-1"
					playerName="Player 2"
					score={this.state.scoreP2}
					currentScore={this.state.currentScoreP2}></PlayerPanel>

				<Button
					classes="btn-new"
					icon="ion-ios-plus-outline"
					btnName="New game"
					onClick={() => {
						// let prevScore = this.state.scoreLimit;
						// console.log(prevScore);
						this.setState(this.initialState);
						// this.setState({
						// 	scoreLimit: prevScore,
						// });
					}}></Button>
				{!this.isPlayerWon() && (
					<Button
						classes="btn-roll"
						icon="ion-ios-loop"
						btnName="Roll dice"
						onClick={this.randomNumber}></Button>
				)}
				{!this.isPlayerWon() && (
					<Button
						classes="btn-hold"
						icon="ion-ios-download-outline"
						btnName="Hold"
						name="scoreLimit"
						onClick={this.setScoreAndSwapTurn}></Button>
				)}
				{this.swapTurnOrGameStarted() && (
					<DiceImage
						classes="dice"
						diceNum={this.state.images[this.state.randNum1 - 1]}></DiceImage>
				)}
				{this.swapTurnOrGameStarted() && (
					<DiceImage
						classes="dice dice-2"
						diceNum={this.state.images[this.state.randNum2 - 1]}></DiceImage>
				)}
				<ScoreInput
					name="scoreLimit"
					value={this.state.scoreLimit}
					onChange={this.handleChange}
					disabled={this.state.GameStarted}></ScoreInput>
			</div>
		);
	};
	swapTurnOrGameStarted = () => {
		return this.state.turnSwapped && this.state.GameStarted;
	};
	activePlayerPanel = () => {
		if (this.state.activePanel === '' && this.state.disabledPanel === 'active')
			this.setState({ activePanel: 'active', disabledPanel: '' });
		else this.setState({ activePanel: '', disabledPanel: 'active' });
	};
	setScoreAndSwapTurn = () => {
		this.setState({
			scoreP1: this.state.currentScoreP1 + this.state.scoreP1,
			currentScoreP1: 0,
			turnSwapped: false,
		});
		this.activePlayerPanel();
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	isPlayerWon = () => {
		if (
			this.state.scoreP1 + this.state.currentScoreP1 >
			this.state.scoreLimit
		) {
			console.log('player won');
			return true;
		}
	};
	randomNumber = () => {
		//random number between 1 and 6
		const randNum1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
		const randNum2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
		this.setState({
			currentScoreP1: this.state.currentScoreP1 + randNum1 + randNum2,
			randNum1,
			randNum2,
			GameStarted: true,
			turnSwapped: true,
		});
	};
	render() {
		// return !this.isPlayerWon() ? this.renderNewGame() : null;
		return this.renderNewGame();
	}
}

export default App;
