/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a*a + b*b = c*c
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
define('n009', function() {
    function n009_v1(numberToCalculate) {
        function isSumEqualNumber(a, b, c, number) {
            return a + b + c === number;
        }

        function checkPiphagorTheorem(a, b, c) {
            return a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a;
        }

        var limit = numberToCalculate - 2
        for (var a = 1; a < limit; a++) {
            for (var b = 1; b < limit; b++) {
                for (var c = 1; c < limit; c++) {
                    if (isSumEqualNumber(a, b, c, numberToCalculate) && checkPiphagorTheorem(a, b, c)) {
                        return a * b * c;
                    }
                }
            }
        }
    }

    return n009_v1;
});

// a 200 
// b 375 
// c 425