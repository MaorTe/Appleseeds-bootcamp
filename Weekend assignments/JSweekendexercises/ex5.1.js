//assuming we dont ignore spaces
const replaced = (str) => str.slice(1, -1);
//assuming we do ignore spaces
const replacedWithSpaces = (str) => str.trim().slice(1, -1);

let str = ' aaa ';
console.log(replaced(str));
console.log(replacedWithSpaces(str));
