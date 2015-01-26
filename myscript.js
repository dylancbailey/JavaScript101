// for (var i = 1; i < 1001; i++) {
// 	if (i % 5 === 0 && i % 3 === 0) {
// 		console.log(i + " is a multiple of 3 and 5");
// 	} else if (i % 5 === 0) {
// 		console.log(i + " is a multiple of 5");
// 	} else if (i % 3 === 0) {
// 		console.log(i + " is a multiple of 3");
// 	} 
// }

var sumOfFive = 0;
var sumOfThree = 0;

for (var i = 1; i < 1001; i++) {
	if (i % 5 === 0) {
		console.log(i + " is a multiple of 5");
		sumOfFive += i;
	} else if (i % 3 === 0) {
		console.log(i + " is a multiple of 3");
		sumOfThree += i;
	}
}

var totalSum = sumOfFive + sumOfThree;
console.log(totalSum + " is the sum of all the multiples of 3 or 5 below 1000");
