// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide
// evenly into n).
// If d(a) = b and d(b) = a, where a != b, then 'a' and 'b' are an amicable pair and each of 'a' and 'b'
// are called amicable numbers.
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
// therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) =
// 220.
// Evaluate the sum of all the amicable numbers under 10000.

define('n021', function() {
	function n21_v1(numberToCalculate) {
		function d(x) {
			var limit = x;
			var divisorsSum = 1;
			for (var i = 2; i < limit - 1; i++) {
				if (x % i == 0) {
					limit = x / i;
					if (limit != i) {
						divisorsSum += limit;
					}

					divisorsSum += i;
				}
			}

			return divisorsSum;
		};

		var arr = [];
		for (var a = 4; a <= numberToCalculate; a++) {
			var b = d(a);
			if (d(b) === a) {
				arr.push(a);
				if (a !== b) {
					arr.push(b);
				};
			};
		};


		return arr.reduce(function(a, b) {
			return a + b
		});
	};

	return n21_v1;
});