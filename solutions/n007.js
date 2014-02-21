/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10001-st prime number?
*/
define('n007', function() {
    function n007_v1(numberToCalculate) {
        var arr = [];
        var prime = false;
        for (var i = 1;; i++) {
            prime = true;
            for (var j = 2; j < i; j++) {
                if (i % j === 0) {
                    prime = false;
                    break;
                }
            }

            if (prime) {
                arr.push(i);
                if (arr.length === numberToCalculate + 1) {
                    break;
                }
            }

        }

        return arr[arr.length - 1];
    }

    function n007_v2(numberToCalculate) {
        var counter = 1,
            prime = false,
            maybePrime, divider;
        for (maybePrime = 3; counter !== numberToCalculate; maybePrime++) {
            prime = true;
            for (divider = 2; divider < maybePrime; divider++) {
                if (maybePrime % divider === 0) {
                    prime = false;
                    break;
                }
            }

            if (prime) {
                counter++;
            }
        }

        return --maybePrime;
    }

    function n007_v3(numberToCalculate) {

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

        var counter = 1,
            maybePrime;
        for (maybePrime = 3;; maybePrime++) {
            if (isPrime(maybePrime)) {
                counter++;
                if (counter === numberToCalculate) {
                    return maybePrime;
                };
            }
        }
    }

    return n007_v3;
});