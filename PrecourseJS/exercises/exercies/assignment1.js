const readlineSync = require('readline-sync');

var sum = 0;

multiline = `###############
Hello! Welcome to Am I A Good Friend quiz! 
###############
First Question
-------------------------`
console.log(multiline);
q1 = ['Ignore them', 'Work', 'Personal projects', 'Ideas'];
index = readlineSync.keyInSelect(q1, 'What do you talk about with your friend?');
if (index === -1)
    sum += 0;
else
    sum += index + 1;

console.log(`Second Question
-------------------------`);
q2 = ['Angry at them', 'Tell them you are not happy with them', 'Kindly ask them to explain why they did it', 'Let it go'];
index = readlineSync.keyInSelect(q2, 'Your friend has done something you dont like. You:');
if (index === -1)
    sum += 0;
else
    sum += index + 1;

console.log(`Third Question
-------------------------`);
q3 = ['Insulted by them', 'Don’t really worry about it', 'Message your friend', 'Message your friend and call if no answer '];
index = readlineSync.keyInSelect(q3, 'One of your friends hasnt called you for a couple of months. You:');
if (index === -1)
    sum += 0;
else
    sum += index + 1;

console.log(`Fourth Question
-------------------------`);
q4 = ['Ignore them', 'Listen to them', 'Empathy to them and give an advice', 'Help them to solve it'];
index = readlineSync.keyInSelect(q4, 'If your friend was upset about something, what would you do?');
if (index === -1)
    sum += 0;
else
    sum += index + 1;

console.log(`Fifth Question
-------------------------`);
q5 = ['Nothing in common', 'Working together', 'Your world view', 'Practically everything'];
index = readlineSync.keyInSelect(q5, 'What do you and your friend have in common?');
if (index === -1)
    sum += 0;
else
    sum += index + 1;

console.log('~~~~~~~~Quiz results~~~~~~~~');
if(sum===0)
    console.log('You didnt answer any questions ')
else if (sum > 0 && sum <= 8)
    console.log('You need to be a better friend! ')
else if (sum > 8 && sum <= 15)
    console.log('You are a decent friend, try to be more friendly ')
else if (sum > 15)
    console.log('You are a very good friend, stay just like you are :) ')