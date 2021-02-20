function centuryFromYear(year) {
	return Math.floor((year - 1) / 100) + 1;
}
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
