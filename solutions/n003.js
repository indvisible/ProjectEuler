// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

define('n003', function() {
    function n003_v1(inputNumber) {
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
        for (index = endPoint; index >= 2; index--) {
            if (inputNumber % index === 0 && isPrime(index)) {
                result = index;
                break;
            };
        }

        return result;
    }

    function n003_v2(inputNumber) {

        // TODO: alter to separate file
        function isPrime(maybePrime) {
            if (maybePrime === 1 || maybePrime === 2 || maybePrime === 3) {
                return true;
            };

            var limit = parseInt(Math.sqrt(maybePrime), 10),
                numberOfDivisors = 0,
                counter = 1;

            for (; counter < limit; counter++) {
                if (maybePrime % counter === 0) {
                    limit = maybePrime / counter;
                    if (limit !== counter) {
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

        var index = parseInt(Math.sqrt(inputNumber), 10);
        for (; index > 1; index--) {
            if (inputNumber % index === 0 && isPrime(index)) {
                return index;
            };
        }
    }

    return n003_v2;
});
