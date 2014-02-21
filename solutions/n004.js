/*
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/
define('n004', function() {
    function n004_v1(countDigits) {
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

        var maxNumber = '9';
        for (var i = countDigits - 1; i > 0; i--) {
            maxNumber += '9';
        };

        maxNumber = parseInt(maxNumber, 10);
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

    function n004_v2(countDigits) {

        // TODO: alter to separate file

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

        function isPalindrom(input) {
            input = '' + input;
            var length = parseInt(input.length / 2, 10),
                i = 0;

            for (; i < length; i++) {
                if (input[i] !== input[input.length - 1 - i]) {
                    return false;
                }
            }

            return true;
        }

        var result = 1,
            answer,
            one = parseInt(repeat('9', countDigits), 10),
            another,
            endPoint = parseInt(Math.sqrt(one), 10);

        for (; one >= endPoint; one--) {
            for (another = one; another >= endPoint; another--) {
                answer = one * another;
                if (isPalindrom(answer)) {
                    result = Math.max(answer, result);
                }
            }
        }

        return result;
    }

    return n004_v2;
});