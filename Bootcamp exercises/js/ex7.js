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

class Hotel {
	constructor(room) {
		this.rooms = [room];
	}
	addRoom(room1) {
		return this.rooms.find((room) => room.roomId !== room1.roomId);
	}
	addNewRoom(roomId, level, amount) {}
	descendingOrderY() {
		return this.pointList.sort((a, b) => b.getY() - a.getY());
	}
}
const r1 = new Room(1, 1, 4);
const r2 = new Room(2, 2, 4);
const r3 = new Room(3, 3, 4);
const r4 = new Room(4, 4, 4);
const hr = new Hotel();
hr.rooms = [r1, r2, r3];

console.log(hr.addRoom(r4));
