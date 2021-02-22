class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	addLast(element) {
		let node = new Node(element); // next === null
		let current;
		if (this.head === null) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}

	getFirst() {
		return this.head;
	}
	getLast() {
		let lastNode = this.head;
		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next;
			}
		}
		return lastNode;
	}

	draw() {
		let lastNode = this.head;
		let str = '';
		while (lastNode.next) {
			str += `${lastNode.element}->`;
			lastNode = lastNode.next;
		}
		str += `${lastNode.element}->${lastNode.next}`;
		console.log(str);
	}

	reverse() {
		let current = this.head,
			previous = null,
			next = null;

		while (current) {
			// save next before we overwrite current.next!
			next = current.next;
			// reverse pointer
			current.next = previous;
			// step forward in the list
			previous = current;
			current = next;
		}
		this.head = previous;
		return this.head;
	}

	removeKthElement(k) {
		let curr = this.head;

		if (k >= this.size || k < 0) return;
		if (k === 0) {
			this.head = this.head.next;
			this.size--;
			return;
		}

		for (let i = 0; i < k - 1; i++) {
			curr = curr.next;
		}
		curr.next = curr.next.next;
		this.size--;
	}

	addKthElement(k) {
		let curr = this.head;

		if (k >= this.size || k < 0) return;
		if (k === 0) {
			this.head = this.head.next;
			this.size--;
			return;
		}

		for (let i = 0; i < k - 1; i++) {
			curr = curr.next;
		}
		curr.next = curr.next.next;
		this.size--;
	}
}
let linkedList = new LinkedList();

linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.draw();
linkedList.removeKthElement(2);
linkedList.draw();
// linkedList.reverse();
// linkedList.draw();

// console.log(linkedList.getLast());
// console.log(linkedList.getFirst());

// let node1 = new Node(2);
// let node2 = new Node(5);
// node1.next = node2;
// let list = new LinkedList(node1);
// console.log(list.head.next.data);
