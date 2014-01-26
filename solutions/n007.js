/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10001-st prime number?
*/

// v1
function n7_v1(){
    console.time('timer');
    var arr = [];
    var prime = false;
    for(var i = 1; ; i++){
        prime = true;
        for(var j = 2; j < i; j++){
            if(i % j === 0){
                prime = false;
                break;
            }
        }
    
            if(prime){
                arr.push(i);
                if(arr.length === 10002){
                    break;
                }
          }
  
    }

    console.timeEnd('timer');
    return arr[arr.length-1];
}

// timer: 1640.000ms 
// answer: 104743


// v2
function n7_v2(){
    console.time('timer');
    var index = 1;
    var prime = false;
    for(var digit = 2; ; digit++){
        prime = true;
        for(var divider = 2; divider < digit; divider++){
            if(digit % divider === 0){
                prime = false;
                break;
            }
        }

        if(prime){
            index++;
            if(index === 10001){
                console.timeEnd('timer');
                return digit;
            }
        }
    }
}

// timer: 1624.000ms = 1.6s
// 104729

// v3
function n7_v3(){
    console.time('timer');
    var index = 3;
    var prime = false;
    for(var digit = 4; ; digit++){
        prime = true;
        for(var divider = parseInt(Math.sqrt(digit)); divider < digit; divider++){
            if(digit % divider === 0){
                prime = false;
                break;
            }
        }
        if(prime){
            index++;
            if(index === 10001){
                console.timeEnd('timer');
                return digit;
            }
        }
    }
}

// timer: 28001.000ms = 2.8s
// 104729
