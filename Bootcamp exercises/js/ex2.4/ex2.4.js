var date = new Date();
var year = date.getFullYear();
var month = date.toLocaleString('en-us', { weekday: 'long' });
var day = date.getDay();
var dayWord = date.toLocaleString('en-us', { weekday: 'long' });
console.log(`Today
is ${dayWord} the ${day} of ${month}, ${year}`);
