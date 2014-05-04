// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

define('n015', function () {
	function n015_v1 (number) {
		        
        // Explanation from http://stackoverflow.com/a/17800645/1563880
        // Original solution from http://stackoverflow.com/a/5450113/1563880
        function repeat(pattern, count) { 
            var result = '';
            if (count >= 1) {
                while (count > 0) {
                    if (count & 1) {
                        result += pattern;  
                    }
                    count >>= 1, pattern += pattern;
                }
            }
    
            return result;
        }

        var bigIntegerSum = function (firstNumber, secondNumber) {
            var addZeros = function (numberString, count) {
                return repeat('0', count) + numberString;
            }

            var checkAndAdd = function (sum, additional) {
                if (additional !== '0') {
                    sum += parseInt(additional, 10);
                };
                return sum;
            }

            var first,
                second,
                diff,
                i,
                temp,
                digitsInMemory,
                tempArray;
            
            first = '' + firstNumber;
            second = '' + secondNumber;

            if (firstNumber === 0) {
                return second;
            };

            if (secondNumber === 0) {
                return first;
            };

            diff = first.length - second.length;
            if (diff !== 0) {
                if (diff > 0) {
                    second = addZeros(second, diff);
                } else {
                    first = addZeros(first, -diff);
                };
            };

            digitsInMemory = 0;
            tempArray = [];
            for (i = first.length - 1; i >= 0 ; i--) {
                temp = checkAndAdd(0, first[i]);
                temp = checkAndAdd(temp, second[i]);
                temp = checkAndAdd(temp, digitsInMemory);
                
                if(temp >= 10){
                    temp = '' + temp;
                    tempArray.push(temp[temp.length - 1]);
                    digitsInMemory = temp.slice(0, temp.length - 1);
                } else {
                    tempArray.push(temp);
                    digitsInMemory = '0';
                }
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
        };

        var bigIntegerProduct = function (firstMultiplicand, secondMultiplicand) {
            var first,
                second,
                limitFirst,
                limitSecond,
                digitsInMemory,
                tempArray,
                resultSum,
                tempResult,
                indexFirst,
                position;

            first = parseInt(firstMultiplicand, 10);
            second = parseInt(secondMultiplicand, 10);
            limitFirst = 503599629399999;
            limitSecond = 999999;
            if ((first <= limitFirst && second <= limitSecond)
                || (first <= limitSecond && second <= limitFirst)) {
                return first * second;
            };
            
            resultSum = 0;
            firstMultiplicand = firstMultiplicand.toLocaleString().replace(/\,/g,'');
            secondMultiplicand = secondMultiplicand.toLocaleString().replace(/\,/g,'');
            for (indexSecond = secondMultiplicand.length - 1; indexSecond >= 0 ; indexSecond--) {
                if (!parseInt(secondMultiplicand[indexSecond], 10)) {
                    continue;
                };

                tempArray = [];
                digitsInMemory = '0';
                for (indexFirst = firstMultiplicand.length - 1; indexFirst >= 0; indexFirst--) {
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

                if (digitsInMemory !== 0) {
                    if (parseInt(digitsInMemory, 10) < 10) {
                        tempArray.push(digitsInMemory);
                    } else {
                        for (var i = digitsInMemory.length - 1; i >=0 ; i--) {
                            tempArray.push(digitsInMemory[i]);
                        };
                    };
                };

                position = repeat('0', secondMultiplicand.length - 1 - indexSecond);
                resultSum = bigIntegerSum(resultSum, tempArray.reverse().join('') +  position);
            };

            return resultSum;
        };

        var factorial, i, doubleFactoral;
        for (factorial = 1, i = 2; i <= number; i++) {
            factorial = bigIntegerProduct(factorial, i);
        };

        for (doubleFactoral = factorial, i = number + 1; i <= number * 2; i++) {
        	doubleFactoral = bigIntegerProduct(doubleFactoral, i);
        };

        return doubleFactoral / (factorial * factorial);
	}

	return n015_v1;
});
