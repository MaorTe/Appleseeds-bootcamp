// class Person {
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//   }
// }

// let p1 = new Person("John", "Doe", 30);
// let p2 = new Person("Mike", "Doe", 50);
// let p3 = new Person("Sara", "Doe", 22);
// let p4 = new Person("Jerry", "Doe", 55);
// let persons = [p1, p2, p3, p4];

// // This function reflecs the array in the UI (table)
// function refreshTable() {
//   let tbodyElement = document.getElementById("table-data");

//   // 1) Delete table content
//   tbodyElement.innerHTML = "";

//   // 2) Add all persons from array to table
//   persons.forEach(person => {
//     let row = tbodyElement.insertRow();

//     let cellFname = row.insertCell();
//     let cellLname = row.insertCell();
//     let cellAge = row.insertCell();
//     cellFname.innerHTML = person.fname;
//     cellLname.innerHTML = person.lname;
//     cellAge.innerHTML = person.age;
//   });

// }
function init() {
	if (!Array.isArray(JSON.parse(localStorage.getItem('tableData')))) {
		localStorage.setItem('tableData', JSON.stringify([]));
		getUsers();
		setTimeout(() => {
			renderData();
		}, 10000);
	}
}

const container = document.querySelector('.container');
//get users from API
const getUsers = async () => {
	const users = await fetch('https://apple-seeds.herokuapp.com/api/users/');
	const response = await users.json();

	const tableData = JSON.parse(localStorage.getItem('tableData'));
	for (let i = 0; i < 32; i++) {
		const extra = await fetch(
			`https://apple-seeds.herokuapp.com/api/users/${i}`
		);
		const responseExtra = await extra.json();
		tableData[i] = { ...response[i], ...responseExtra };
	}
	localStorage.setItem(`tableData`, JSON.stringify(tableData));
};

const tableBody = document.querySelector('.tableBody');
// render data (read)
const renderData = () => {
	tableBody.innerHTML = '';
	const tableData = JSON.parse(localStorage.getItem('tableData'));

	// setting table body
	tableData.forEach((person) => {
		// debugger;
		const tableHtml = `<tbody>
			<tr>
				<td>${person.id}</td>
				<td><input class="person-info" type="text" disabled value="${
					person.firstName
				}" size="${person.firstName.length}"/></td>
				<td><input class="person-info" type="text" disabled value="${
					person.lastName
				}" size="${person.lastName.length}"/></td>

				<td><input class="person-info" type="text" disabled value="${person.capsule}" 
				size="${person.capsule.toString().length}
				" pattern="\d*" maxlength="2"/></td>
				
				<td><input class="person-info" type="text" disabled value="${
					person.age
				}" size="${person.age.toString().length}"
				pattern="\d*" maxlength="3"/></td>

				<td><input class="person-info" type="text" disabled value="${
					person.city
				}" size="${person.city.length}"/></td>
				<td><input class="person-info" type="text" disabled value="${
					person.gender
				}" size="${person.gender.length}"/></td>
				<td><input class="person-info" type="text" disabled value="${
					person.hobby
				}" size="${person.hobby.length}"/></td>

				<td><button class="item-edit edit-btn" data-update>
					edit
					</button>
				</td>
				<td><button class="item-delete delete-btn" data-delete>
					delete
					</button>
				</td>
			</tr>
		</tbody>`;

		tableBody.innerHTML += tableHtml;
	});
	deleteRowEventListener();
	updateRowEventListener();
	localStorage.setItem(`tableData`, JSON.stringify(tableData));
};

// async function print() {
// 	console.log(await getUsers());
// }
function makeTable() {
	let table = document.querySelector('table'),
		ths = table.querySelectorAll('thead th'),
		row = table.querySelectorAll('tbody tr'),
		tBody = table.querySelector('tbody'),
		docF = document.createDocumentFragment();

	function sortMe(e) {
		let thsArray = [].slice.call(ths),
			rowArray = [].slice.call(row),
			target = e.target,
			thsIndex = thsArray.indexOf(target);

		rowArray.sort(function (a, b) {
			let tdA = a.children[thsIndex].textContent,
				tdB = b.children[thsIndex].textContent;

			if (tdA > tdB) {
				return 1;
			} else if (tdA < tdB) {
				return -1;
			} else {
				return 0;
			}
		});

		rowArray.forEach(function (row) {
			docF.appendChild(row);
		});

		tBody.appendChild(docF);
	}

	for (let i = 0; i < ths.length; i++) {
		ths[i].addEventListener('click', sortMe, false);
	}
}
// makeTable();
//-------------event listeners-------------
//delete
const deleteRowEventListener = () => {
	const rowDelete = document.querySelectorAll('tbody [data-delete]');
	rowDelete.forEach((el, index) => {
		el.addEventListener('click', () => deletePerson(index));
	});

	function deletePerson(index) {
		const tableData = JSON.parse(localStorage.getItem('tableData'));
		tableData.splice(index, 1);
		tableData.forEach((person, index) => {
			person.id = index;
		});
		localStorage.setItem('tableData', JSON.stringify(tableData));
		renderData();
	}
};

//update
const updateRowEventListener = () => {
	const rowUpdate = document.querySelectorAll('tbody [data-update]');
	rowUpdate.forEach((el, index) => {
		el.addEventListener('click', () => {
			const currentPerson =
				el.parentElement.parentElement.children[1].children[0];
			currentPerson.focus();
			updateItem(el, currentPerson, index);
		});
	});

	function updateItem(el, currentPerson, index) {
		let isFocused = document.activeElement === currentPerson;
		if (!isFocused) {
			currentPerson.disabled = false;
			currentPerson.focus();
		}
		if (isFocused) currentPerson.disabled = true;
		// console.log(currentPerson.value);
		// EventListener for each Person input
		currentPerson.addEventListener('blur', () => {
			const tableData = JSON.parse(localStorage.getItem('tableData'));
			console.log(tableData[index].firstName);
			tableData[index].firstName = currentPerson.value;
			localStorage.setItem('tableData', JSON.stringify(tableData));
			renderData();
		});
	}
};

init();
renderData();
