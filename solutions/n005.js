// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

define('n005', function() {
    function n005_v1(numberToCalculate) {
        var isDivide;
        for (var smallest = numberToCalculate * 2;; smallest++) {
            isDivide = true;
            for (var divider = 2; divider < numberToCalculate; divider++) {
                if (smallest % divider !== 0) {
                    isDivide = false;
                    break;
                }
            }

            if (isDivide) {
                return smallest;
            }
        }
    }

    function n005_v2(numberToCalculate) {
        var isDivide,
            startNumber,
            divider;
        for (startNumber = numberToCalculate * 2;; startNumber++) {
            isDivide = true;
            for (divider = 2; divider < numberToCalculate; divider++) {
                if (startNumber % divider !== 0) {
                    isDivide = false;
                    break;
                }
            }

            if (isDivide) {
                return startNumber;
            }
        }
    }

    return n005_v2;
});
