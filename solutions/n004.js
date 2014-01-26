/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function n4_v1(){
    console.time('timer');

    function isPalindrom(str){
        str = '' + str;
        var isPalindrom = true;
        var length = parseInt('' + str.length / 2, 10);
        for(var i = 0; i < length; i++){
            if(str[i] !== str[str.length - 1 - i]){
               isPalindrom = false;
               break;
            }
        }
          
        return isPalindrom;
    }

    var answer;
    var arr = [];
    for(var first = 999; first >= 100; first--){
        for(var second = 999; second >= 100; second--){
            answer = first * second;
            if(isPalindrom(answer)){
                arr.push(answer);
            }
        }
    }

    answer = Math.max.apply(Math, arr);
    console.timeEnd('timer');
    return answer;
}

// timer: 170.000ms 
// answer: 906609
