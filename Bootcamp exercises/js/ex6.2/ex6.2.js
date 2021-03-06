const people = ['Greg', 'Mary', 'Devon', 'James'];
// 1
people.forEach((element) => {
	console.log(element);
});
// 2 remove first index
let first = people.shift();
console.log(people);
// 3 remove last index
let last = people.pop();
console.log(people);
// 4 add first index
people.unshift('Matt');
console.log(people);
// 5 add last index
people.push('Maor');
console.log(people);
// 6
for (let i = 0; i < people.length; i++) {
	console.log(people[i]);
	if (people[i] === 'Mary') break;
}
// 7
const newPeopleArr = [...people.slice(2, 4)];
console.log(newPeopleArr);

//more accurate way
const people = ['Matt', 'Mary', 'Devon', 'James'];
const matt = people.splice(people.indexOf('Matt'), 1).toString();
people.unshift(matt.toString());

const Mary = people.splice(people.indexOf('Mary'), 1).toString();
people.unshift(Mary.toString());

const newPeopleArr = [...people.slice(people.indexOf('Matt') + 1)];
console.log(newPeopleArr);

// 8
console.log(people.indexOf('Mary'));
// 9
console.log(people.indexOf('Foo'));
// 10
console.log(people.splice(2, 1, 'Elizabeth', 'Artie'));
console.log(people);
// 11
const withBob = [...people, 'Bob'];
console.log(withBob);
