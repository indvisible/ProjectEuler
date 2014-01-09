/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function n5_v1(){
    var isDivide;
    for(var smallest = 40; ; smallest++){
        isDivide = true;
        for(var divider = 2; divider < 20; divider++){
            if(smallest % divider !== 0){
                isDivide = false;
                break;
            }
        }

        if(isDivide){
            return smallest;
        }
    }
}

// answer: 232792560
