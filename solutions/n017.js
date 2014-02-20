define('n017', function() {
	function n017_v1(numberToCalculate) {
		var words = {
			01: 'one',
			02: 'two',
			03: 'three',
			04: 'four',
			05: 'five',
			06: 'six',
			07: 'seven',
			08: 'eight',
			09: 'nine',
			10: 'ten',
			11: 'eleven',
			12: 'twelve',
			13: 'thirteen',
			14: 'fourteen',
			15: 'fifteen',
			16: 'sixteen',
			17: 'seventeen',
			18: 'eighteen',
			19: 'nineteen',
			20: 'twenty',
			30: 'thirty',
			40: 'forty',
			50: 'fifty',
			60: 'sixty',
			70: 'seventy',
			80: 'eighty',
			90: 'ninety',
			100: 'hundred',
			1000: 'thousand'
		};

		function before20(number, sum) {
			if (number <= 20 || (number < 100 && number % 10 === 0)) {
				sum += words[number].length;
			};

			return sum;
		}

		var count = 0,
			temp, rank;

		function between20and100(number, count) {
			if (number < 100) {
				if (number > 20 && number < 30) {
					rank = 20;
				}

				if (number > 30 && number < 40) {
					rank = 30;
				}

				if (number > 40 && number < 50) {
					rank = 40;
				}

				if (number > 50 && number < 60) {
					rank = 50;
				}

				if (number > 60 && number < 70) {
					rank = 60;
				}

				if (number > 70 && number < 80) {
					rank = 70;
				}

				if (number > 80 && number < 90) {
					rank = 80;
				}

				if (number > 90 && number < 100) {
					rank = 90;
				}

				temp = number - rank;
				count += words[temp].length + words[rank].length;
			}

			return count;
		};

		for (var i = numberToCalculate; i > 0; i--) {
			if (i <= 20 || (i < 100 && i % 10 === 0)) {
				count = before20(i, count);
			} else {
				if (i < 100) {
					count = between20and100(i, count);
				} else {
					if (i < 1000) {
						temp = parseInt(i / 100, 10);
						count += words[temp].length + words[100].length;
						temp = i % 100;
						if (temp !== 0) {
							count += 'and'.length;
							if (temp <= 20 || (temp < 100 && temp % 10 === 0)) {
								count = before20(temp, count);
							} else {
								count = between20and100(temp, count);
							};
						};
					} else {
						temp = parseInt(i / 1000, 10);
						count += words[temp].length + words[1000].length;
					};

				};
			};
		};

		return count;
	};

	function n017_v2(numberToCalculate) {
		var words = {
			01: 3, // 'one',
			02: 3, // 'two',
			03: 5, // 'three',
			04: 4, // 'four',
			05: 4, // 'five',
			06: 3, // 'six',
			07: 5, // 'seven',
			08: 5, // 'eight',
			09: 4, // 'nine',
			10: 3, // 'ten',
			11: 6, // 'eleven',
			12: 6, // 'twelve',
			13: 8, // 'thirteen',
			14: 8, // 'fourteen',
			15: 7, // 'fifteen',
			16: 7, // 'sixteen',
			17: 9, // 'seventeen',
			18: 8, // 'eighteen',
			19: 8, // 'nineteen',
			20: 6, // 'twenty',
			30: 6, // 'thirty',
			40: 5, // 'forty',
			50: 5, // 'fifty',
			60: 5, // 'sixty',
			70: 7, // 'seventy',
			80: 6, // 'eighty',
			90: 6, // 'ninety',
			100: 7, // 'hundred',
			1000: 8 // 'thousand'
		};

		var count = 0,
			temp, rank, i;

		function before20(number, sum) {
			return sum + words[number];
		};

		function between20and100(number, count) {
			rank = parseInt(number / 10, 10) * 10;
			return count + words[number - rank] + words[rank];
		};

		function addHundredCount(countSum, hundred, counter) {
			return countSum + words[parseInt(counter / hundred, 10)] + words[hundred];
		}

		for (i = numberToCalculate; i > 0; i--) {
			if (i <= 20 || (i < 100 && i % 10 === 0)) {
				count = before20(i, count);
			} else {
				if (i < 100) {
					count = between20and100(i, count);
				} else {
					if (i < 1000) {
						count = addHundredCount(count, 100, i);
						temp = i % 100;
						if (temp !== 0) {
							count += 3; // 'and'.length
							if (temp <= 20 || (temp < 100 && temp % 10 === 0)) {
								count = before20(temp, count);
							} else {
								count = between20and100(temp, count);
							};
						};
					} else {
						count = addHundredCount(count, 1000, i);
					};

				};
			};
		};

		return count;
	};

	return n017_v2;
});