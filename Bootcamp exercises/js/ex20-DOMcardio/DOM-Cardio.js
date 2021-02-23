// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
//put it into the body
document.body.appendChild(div);

//make an unordered list
//add three list items with the words "one ,two three" in them
const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
<ul>`;

//put that list into the above wrapper
div.innerHTML = ul;
console.log(div);

//create an image
const img = document.createElement('img');
//set the source to an img
img.src = 'https://picsum.photos/500';
//set the width to 250
img.width = 250;
img.height = 250;
//add a class of cute
img.classList.add('cute');
// Append that image to the wrapper
div.appendChild(img);

//with HTML string make a div. with two paragraphs inside of it
const myHTML = `
<div class="myDiv">
    <p> Paragraph One </p>
    <p> Paragraph Two </p>
</div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);

//put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);
//add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
//remove the first paragraph
myDiv.firstElementChild.remove();
//create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
	const html = `
    <div class = "playerCard">
    <h2>${name} - ${age}</h2>
    <p> Their height is ${height} and ${age} years old. In dog years this person would be ${
		age * 7
	}. The would be a tall dog!</p>
    <button class="delete" type="button"> &times; Delete</button>
    </div>
    `;
	return html;
}
//have that function return html that looks like this:
// {/* <div class="playerCard">
// 	<h2>
// 		${name} - ${age}
// 	</h2>
// 	<p>
// 		Their height is ${height} and ${age} years old. In dog years this person
// 		would be ${age * 7}. The would be a tall dog!
// 	</p>
// </div>; */}

//make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
//Have that function make 4 cards
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('wes', 12, 150);
// cards.insertAdjacentElement('afterbegin', generatePlayerCard('snickers',12,150));
cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

//append those cards to the div
//put the div into the DOM just before the wrapper element
//Bonus, put a delete Button on each card so when you click it, the whole card is removed

//select all the buttons
const buttons = document.querySelectorAll('.delete');
function deleteCard(event) {
	const buttonThatGotClicked = event.currentTarget;
	// buttonThatGotClicked.parentElement.remove();
	buttonThatGotClicked.closest('.playerCard').remove();
}
//loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
