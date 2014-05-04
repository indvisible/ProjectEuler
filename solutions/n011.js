// What is the greatest product of four adjacent numbers 
// in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?

define('n011', function() {
    function n011_v1(sourceArray, digitsCount){
        if (!sourceArray) {
            return "pass the matrix";
        };

        if (!digitsCount) {
            return "pass digits count for product";
        };

        if (sourceArray.length < digitsCount) {
            return "wrong \'digitsCount\' parameter";
        };

        for (var i = 0; i < sourceArray.length; i++) {
            if(sourceArray[i].length !== sourceArray.length){
                return "not sqare matrix";
            }
        };

        console.time('timer');

        function transpose(array2d) {
            return Object.keys(array2d[0]).map(
                function (c) { 
                    return array2d.map(function (r) { 
                        return r[c]; 
                    }); 
                }
            );
        }

        function rotateArray(array2d){
            var transposed = transpose(array2d);
            for (var i = 0; i < transposed.length; i++) {
                transposed[i].reverse();
            };
            return transposed;
        }

        var maxProduct = 1;

        function findMaxProductInLine(array){
            function productInLine(item, index, count){
                var result = item[index];
                if (count) {
                    for (var i = 1; i < count; i++) {
                        result *= item[index + i];
                    };
                };
                return result;
            }

            var indexLine, indexColumn, tempProduct, startColumn;
            for (indexLine = 0; indexLine < array.length; indexLine++) {
                for (indexColumn = 0; indexColumn < array[indexLine].length - digitsCount; indexColumn++) {
                    tempProduct = productInLine(array[indexLine], indexColumn, digitsCount);
                    if (tempProduct > maxProduct) {
                        maxProduct = tempProduct;
                    };
                };
            };
        }

        findMaxProductInLine(sourceArray);
        findMaxProductInLine(transpose(sourceArray));

        function findMaxProductInDiagonal(array) {
            var currentIndexLine, indexLine, indexColumn, tempProduct, startColumn;
            for (startColumn = 0; startColumn <= array.length - digitsCount; startColumn++) {
                for (indexLine = array.length - digitsCount; indexLine >= 0; indexLine--) {
                    tempProduct = 1;
                    for (indexColumn = startColumn, currentIndexLine = indexLine; indexColumn < (digitsCount + startColumn); indexColumn++, currentIndexLine++) {
                        tempProduct *= array[currentIndexLine][indexColumn];
                    }

                    if (tempProduct > maxProduct) {
                        maxProduct = tempProduct;
                    };
                };      
            };
        }

        findMaxProductInDiagonal(sourceArray);
        findMaxProductInDiagonal(rotateArray(sourceArray));

        console.timeEnd('timer');
        return maxProduct;
    }

    return n011_v1;
});
