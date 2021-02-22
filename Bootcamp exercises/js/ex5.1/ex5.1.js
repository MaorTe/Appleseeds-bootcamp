function countryToLiveIn(language, isIsland, population, country) {
	if (language === 'English' && population < 50000000 && !isIsland)
		return console.log(`You
shold live in Finland`);
	else {
		console.log(`Finland does not meet your
criteria`);
		population = 5000000;
		language = 'English';
		isIsland = false;
		return;
	}
}
countryToLiveIn('French', true, 100000, 'France');
