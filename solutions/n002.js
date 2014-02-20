/*
By considering the terms in the Fibonacci sequence whose values do not exceed 
four million, find the sum of the even-valued terms.
*/

define('n002', function() {
	function n002_v1 (numberToCalculate) {
		var first, second, current, sum;
		first = 1;
		second = 2;
		sum = 2;

		while (true) {
			current = first + second;

			if (current <= numberToCalculate) {
				if (current % 2 === 0) {
					sum += current;
				};

				first = second;
				second = current;
			} else {
				break;
			}
		}

		return sum;
	}

	function n002_v2 (numberToCalculate) {
		var first = 1,
			second = 2,
			sum = 2,
			current = 3;

		for (; current <= numberToCalculate; current = first + second) {
			if (current % 2 === 0) {
				sum += current;
			};

			first = second;
			second = current;
		}

		return sum;
	}

	return n002_v2;
});