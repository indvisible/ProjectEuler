/*
he following iterative sequence is defined for the set of positive integers:
n -> n/2 (n is even)
n -> 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting
numbers finish at 1.
Which starting number, under one million, produces the longest chain?

*/

function n014_v1(numberToCalculate) {
	console.time('timer');
	var startNumber, currentNumber, chain, resultObject;
	
	resultObject = {};

	for (startNumber = numberToCalculate; startNumber > 4; startNumber--) {
		chain = [];
		currentNumber = startNumber;
		chain.push(currentNumber);
		while(currentNumber !== 1){
			if(currentNumber % 2 === 0){
				currentNumber /= 2;
			} else {
				currentNumber = 3* currentNumber + 1;
			}
			
			chain.push(currentNumber);
		}

		resultObject[startNumber] = chain.length;
	};	

	var arrayValues = Object.keys(resultObject).map(function(key){return resultObject[key];});

	var maxValue = arrayValues[0];
	for (var index = 0; index < arrayValues.length; index++) {
		if (arrayValues[index] > maxValue) {
			maxValue = arrayValues[index];
		};
	};

	var answer = parseInt(Object.keys(resultObject).filter(function(key){ return resultObject[key] === maxValue; })[0]);
	console.timeEnd('timer');
	return answer;
}

n014_v1(1000000 - 1);

// timer: 174999.897ms
// answer: 837799
