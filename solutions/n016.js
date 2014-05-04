// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

define('n016', function () {
	function n016_v1 (base, powerIndex) {
		var baseNumber, countMultiplicand, answer, i, result;
		var multiply = function (firstMultiplicand, secondMultiplicand) {
			var first, second, limitFirst, limitSecond, digitsInMemory, tempArray, tempResult, indexFirst, indexSecond;

			first = parseInt(firstMultiplicand, 10);
			second = parseInt(secondMultiplicand, 10);
			limitFirst = 503599629399999;
			limitSecond = 999999;
			if ((first <= limitFirst && second <= limitSecond)
				|| (first <= limitSecond && second <= limitFirst)) {
				return first * second;
			};

			digitsInMemory = '0';
			tempArray = [];
			firstMultiplicand = firstMultiplicand.toLocaleString().replace(/\,/g,'');
			secondMultiplicand = secondMultiplicand.toLocaleString().replace(/\,/g,'');

			for (indexFirst = firstMultiplicand.length - 1; indexFirst >= 0 ; indexFirst--) {
				for (indexSecond = secondMultiplicand.length - 1; indexSecond >= 0; indexSecond--) {
					tempResult = parseInt(firstMultiplicand[indexFirst], 10) * parseInt(secondMultiplicand[indexSecond], 10);
					if (digitsInMemory !== '0') {
						tempResult += parseInt(digitsInMemory, 10);
					};

					if (tempResult > 9) {
						tempResult = '' + tempResult;
						tempArray.push(tempResult[tempResult.length - 1]);
						digitsInMemory = tempResult.slice(0, tempResult.length - 1);
					} else {
						tempArray.push('' + tempResult);
						digitsInMemory = '0';
					};
				};
			};

			if (digitsInMemory != 0) {
				if (parseInt(digitsInMemory) < 10) {
					tempArray.push(digitsInMemory);
				} else {
					for (var i = digitsInMemory.length - 1; i >=0 ; i--) {
						tempArray.push(digitsInMemory[i]);
					};
				};
			};

			return tempArray.reverse().join('');
		}

		if (powerIndex < 0) {
			return 'negative power index';
		};

		if (base < 0) {
			return 'negative power base';
		};

		if (!powerIndex) {
			return 1;
		};

		if (!base) {
			return 0;
		};

		answer = 0;
		if (base <= 11 && powerIndex <= 20 || base <= 81 && powerIndex <= 11) {
			('' + Math.pow(base, powerIndex)).split('').map(function(item) { answer += parseInt(item, 10);});
			return answer;
		};

		baseNumber = parseInt(base, 10);
		countMultiplicand = parseInt(powerIndex, 10) - 1;
		result = baseNumber;
		for (i = 0; i < countMultiplicand; i++) {
			result = multiply(result, baseNumber);
		};

		result.toLocaleString().replace(/\,/g,'').split('').map(function(item) { answer += parseInt(item, 10);});
		return answer;
	}

	return n016_v1;
});
