// The sum of the squares of the first ten natural numbers is,
// 1*1 + 2*2 + ... + 10*10 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers 
// and the square of the sum is 3025 - 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural
// numbers and the square of the sum.

define('n006', function() {
	function n006_v1(numberToCalculate) {
		var i, sumSquares = 0,
			squareSum = 0;
		for (i = 1; i <= numberToCalculate; i++) {
			sumSquares += i * i;
			squareSum += i;
		};
		squareSum = squareSum * squareSum;
		return squareSum - sumSquares;
	}

	return n006_v1;
});
