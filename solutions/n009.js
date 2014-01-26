/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a*a + b*b = c*c
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function n9_v1(){
    function isSumEqual1000(a, b, c){
        return a + b + c === 1000;
    }
  
    function checkPiphagorTheorem(a, b, c){
        return a * a + b * b === c * c 
            || a * a + c * c === b * b 
            || b * b + c * c === a * a;
    }
  
    for(var a = 1; a < 998; a++){
        for(var b = 1; b < 998; b++){
            for(var c = 1; c < 998; c++){
                if(isSumEqual1000(a, b, c) && checkPiphagorTheorem(a, b, c)){
                    return a * b * c;
                }
            }
        }
    }
}

// answer: 31875000
// a 200 
// b 375 
// c 425 
