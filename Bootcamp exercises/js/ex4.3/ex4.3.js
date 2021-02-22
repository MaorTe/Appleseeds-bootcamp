const calculateScore = (a, b, c) => a + b + c;
const avgJohn = calculateScore(89, 120, 103);
const avgMike = calculateScore(116, 94, 123);
const avgMary = calculateScore(97, 134, 105);
if (avgJohn > avgMike && avgJohn > avgMary)
	console.log(`winner is John's team with average score of ${avgJohn}`);
else if (avgMike > avgJohn && avgMike > avgMary)
	console.log(`winner is Mike's
team with average score of ${avgMike}`);
else if (avgJohn === avgMike && avgJohn === avgMary)
	console.log(`it is a draw`);
else
	console.log(`winner is Mary's
team with average score of ${avgMary}`);
