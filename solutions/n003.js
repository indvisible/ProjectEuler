/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

function n003 (inputNumber) {
	console.time('timer');
    function isPrime(x) {
        if (x === 1 || x === 2 || x === 3) {
            return true;
        };

        var limit = parseInt(Math.sqrt(x), 10);
        var numberOfDivisors = 0;

        for (var i = 1; i < limit; i++) {
            if (x % i == 0) {
                limit = x / i;
                if (limit != i) {
                    numberOfDivisors++;
                }

                numberOfDivisors++;
            }

            if (numberOfDivisors > 2) {
                return false;
            };
        }

        return numberOfDivisors === 2;
    }

	var index, result, endPoint;
	result = 1;
	endPoint = parseInt(Math.sqrt(inputNumber), 10);
	for (index = endPoint; index >=2; index--) {
        if(inputNumber % index === 0 && isPrime(index)){
        		result = index;
    			break;
    	};
    }

    console.timeEnd('timer');
    return result;
}

n003(600851475143);

// timer: 19.874ms
// answer: 6857