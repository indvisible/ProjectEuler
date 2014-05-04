// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

define('n010', function(argument) {
    function n010_v1(numberToCalculate) {
        var sum = 2 + 3;
        var prime = false;
        for (var index = 5;; index++) {
            prime = true;
            for (var j = 2; j < index; j++) {
                if (index % j === 0) {
                    prime = false;
                    break;
                }
            }

            if (prime) {
                if (index >= numberToCalculate) {
                    break;
                } else {
                    sum += index;
                };
            }
        }

        return sum;
    }

    function n010_v2() {
        // TODO: alter to separate file
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

        var sum = 2 + 3,
            index;
        for (index = 5;; index++) {
            if (isPrime(index)) {
                if (index < 2000000) {
                    sum += index;
                } else {
                    return sum;
                };
            }
        }
    }
    
    return n010_v2;
});
