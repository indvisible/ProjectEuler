/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

//v1
function getSumPrimesBelow2Million(){
    console.time('timer');
    var sum = 2 + 3;
    var prime = false;
    for(var index = 5; ; index++){
        prime = true;
        for(var j = 2; j < index; j++){
            if(index % j === 0){
                prime = false;
                break;
            }
        }

        if(prime){
            if(index >= 2000000){
                break;
            } else {
                sum += index;
          };
        }
    }

    console.timeEnd('timer');
    return sum;
}

//v2
function n10_v2(){
    console.time('timer');
    var sum = 2 + 3;
    var prime = false;
    for(var index = 5; ; index++){
        prime = true;
        for(var j = 2; j < parseInt(Math.sqrt(index)); j++){
            if(index % j === 0){
                prime = false;
                break;
            }
        }
    
        if(prime){
            if(index < 2000000){
                sum += index;
            } else {
                break;
            };
        }
    }

    console.timeEnd('timer');
    return sum;
}

// v3
function n10_v3(){
    console.time('timer');
    function isPrime(x) {
        if (x === 1 || x === 2 || x === 3) {
            return true;
        };

        var limit = parseInt(Math.sqrt(x));
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

    var sum = 2 + 3;
    for(var index = 5; ; index++){
        if(isPrime(index)){
            if(index < 2000000){
                sum += index;
            } else {
                break;
            };
        }
    }

    console.timeEnd('timer');
    return sum;
}

// timer: 968776.000ms
// 142913828922
