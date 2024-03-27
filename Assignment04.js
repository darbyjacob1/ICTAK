// Write a JavaScript program to find the sum of squares of the elements of an array.

let myArr1 = []
if (myArr1.length === 0) {console.log('Since array is empty, sum of squares of the elements of array is 0')}
else {console.log(`Sum of squares of the elements of array is ${arraySumCalculator(myArr1)}`)}

function arraySumCalculator(fnMyArr1) {
    let sumOfSqOfElements = 0;

    for (let index = 0; index < fnMyArr1.length; index++) {
        sumOfSqOfElements = sumOfSqOfElements + Math.pow(fnMyArr1[index], 2);
    }
    return sumOfSqOfElements;
}