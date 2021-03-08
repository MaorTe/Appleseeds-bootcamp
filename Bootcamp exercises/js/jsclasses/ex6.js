class Room {
	constructor(roomId, level, amount, isFree = true) {
		this.roomId = roomId;
		this.level = level;
		this.amount = amount;
		this.isFree = isFree;
	}
	isRoomFree(amount) {
		return (isFree = amount > 5 ? false : true);
	}

	print() {
		console.log(`roomId is: ${this.roomId}
					 level is: ${this.level}
					 amount is: ${this.amount}
					 isFree? ${this.isFree}`);
	}
}
