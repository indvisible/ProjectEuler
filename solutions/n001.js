/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
define('n001', function () {
	function n1_v1(number){
		var sum, index;
		sum = 0;
		for(index = 3; index < number; index++){
			if(index % 3 === 0 || index % 5 === 0){
				sum += index;
			}
		}
		return sum;
	}

	return n1_v1;
});