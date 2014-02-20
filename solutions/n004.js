/*
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/
define('n004', function() {
    function n004_v1(maxNumber) {
        function isPalindrom(str) {
            str = '' + str;
            var isPalindrom = true;
            var length = parseInt('' + str.length / 2, 10);
            for (var i = 0; i < length; i++) {
                if (str[i] !== str[str.length - 1 - i]) {
                    isPalindrom = false;
                    break;
                }
            }

            return isPalindrom;
        }

        var answer;
        var arr = [];
        for (var first = maxNumber; first >= 10; first--) {
            for (var second = maxNumber; second >= 10; second--) {
                answer = first * second;
                if (isPalindrom(answer)) {
                    arr.push(answer);
                }
            }
        }

        answer = Math.max.apply(Math, arr);
        return answer;
    }

    return n004_v1;
});