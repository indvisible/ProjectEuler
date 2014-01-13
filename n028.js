/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral
is formed as follows:
21 22 23 24 25
20 07 08 09 10
19 06 01 02 11
18 05 04 03 12
17 16 15 14 13
It can be verified that the sum of both diagonals is 101.
What is the sum of both diagonals in a 1001 by 1001 spiral formed in the same way?
*/

function n028_v1 (dimensions) {
	console.time('timer');
	var array = [];
	var i, j, countBeam, numberToFill, startPoint, sum, rowIndex, columnIndex;

	//fill array
	for (i = 0; i < dimensions; i++) {
		array[i] = [];
		for (j = 0; j < dimensions; j++) {
			array[i][j] = 1;
		};
	};

	startPoint = Math.floor(dimensions / 2);

	// diagolnal fill
	for(countBeam = 1, numberToFill = 1; countBeam <= startPoint; countBeam++) {
		numberToFill += countBeam * 2;
		array[startPoint + countBeam][startPoint + countBeam] = numberToFill;

		numberToFill += countBeam * 2;
		array[startPoint + countBeam][startPoint - countBeam] = numberToFill;

		numberToFill += countBeam * 2;
		array[startPoint - countBeam][startPoint - countBeam] = numberToFill;

		numberToFill += countBeam * 2;
		array[startPoint - countBeam][startPoint + countBeam] = numberToFill;
	}

	sum = 0;
	for (rowIndex = 0; rowIndex < array.length; rowIndex++) {
		sum += array[rowIndex][rowIndex];
		columnIndex = array.length - 1 - rowIndex;
		if (rowIndex !== columnIndex) {
			 sum += array[rowIndex][columnIndex];
		};
	};

	console.timeEnd('timer');
	return sum;
}

n028_v1(1001);

// timer: 274394.555ms
// answer: 669171001

function n028_v2 (dimensions) {
	console.time('timer');
	var countBeam, numberToFill, startPoint, sum;

	sum = 1;
	startPoint = Math.floor(dimensions / 2);

	// diagolnal fill
	for(countBeam = 1, numberToFill = 1; countBeam <= startPoint; countBeam++) {		
		numberToFill += countBeam * 2;
		sum += numberToFill;
		numberToFill += countBeam * 2;
		sum += numberToFill;
		numberToFill += countBeam * 2;
		sum += numberToFill;
		numberToFill += countBeam * 2;
		sum += numberToFill;
	}

	console.timeEnd('timer');
	return sum;
}

n028_v2(1001);

// timer: 0.145ms 
// answer: 669171001
