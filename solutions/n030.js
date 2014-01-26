/*
Surprisingly there are only three numbers that can be written as the sum of fourth powers
of their digits:
1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44

(As 1 = 14 is not a sum it is not included.)

The sum of these numbers is 1634 + 8208 + 9474 = 19316.
Find the sum of all the numbers that can be written as the sum of fifth powers of their
digits.

*/

function n030_v1 (powerIndex) {
	console.time('timer');
	var array = [];
	var str, sum, parsed, number, i, end;
	end = Math.pow(10, ('' + Math.pow(9, powerIndex)).length + 1);
	for (number = 2; number < end; number++) {
		str = '' + number;
		sum = 0;
		for (i = 0; i < str.length; i++) {
			parsed = parseInt(str[i]);
			sum += Math.pow(parsed, powerIndex);
		};

		if (sum === number) {
			array.push(number);
		};
	};

	sum = 0;
	for (i = 0; i < array.length; i++) {
		sum += array[i];
	};

	console.timeEnd('timer');
	return sum;
}

n030_v1(5);

// timer: 301.347ms
// answer: 443839

function n030_v2 (powerIndex) {
	console.time('timer');
	var result = 0;
	var str, sum, parsed, number, i, end;
	end = Math.pow(10, ('' + Math.pow(9, powerIndex)).length) * 10;
	for (number = 2; number < end; number++) {
		str = '' + number;
		sum = 0;
		for (i = 0; i < str.length; i++) {
			parsed = parseInt(str[i]);
			sum += Math.pow(parsed, powerIndex);
		};

		if (sum === number) {
			result += number;
		};
	};

	console.timeEnd('timer');
	return result;
}

n030_v2(5);

// timer: 295.401ms
// answer: 443839
