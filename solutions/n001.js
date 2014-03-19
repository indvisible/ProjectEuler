/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
define('n001', function () {
	function n001_v1(number){
		var sum, index;
		sum = 0;
		for(index = 3; index < number; index++){
			if(index % 3 === 0 || index % 5 === 0){
				sum += index;
			}
		}
		return sum;
	}

	function n001_v2_chain(number){
		return new Array(number)
			.join().split(',')
			.map(function(item, index){ return index;})
			.reduce(function(a, b){ return (b% 3 === 0 || b % 5 === 0) ? a + b: a; });
	}

	return n001_v2_chain;
});