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
		if (room.roomId === room1.roomId) {
			return false;
		} else {
			return this.rooms.push(room);
		}
	}
	// addNewRoom(roomId, level, amount) {
	// 	this.rooms.forEach(room => {
	// 		if(room.addRoom())
	// 	});
	// }
	removeRoom(roomId) {
		return this.rooms.filter(
			(room) => room.roomId === roomId && roomId.isFree === true
		);
	}
	checkFreeRoom(amount) {
		return this.rooms.filter((room) => console.log(room.amount < amount));
	}
	checkIn(roomId, amount) {
		return this.rooms.filter((room) => {
			if (room.checkFreeRoom(amount) && room.roomId !== roomId) return true;
			return false;
		});
	}
	HighRoomFree() {
		return this.rooms.sort((a, b) => b.amount - a.amount);
	}

	getAllRooms(isFree) {
		return this.rooms.sort((a, b) => (isFree ? a.isFree - b.isFree : false));
	}
}
const r1 = new Room(1, 1, 4);
const r2 = new Room(2, 2, 4);
const r3 = new Room(3, 3, 4);
const r4 = new Room(4, 4, 4);
const hr = new Hotel();
hr.rooms = [r1, r2, r3];

hr.addRoom(r2);
hr.checkFreeRoom(r3);
hr.HighRoomFree(true);
