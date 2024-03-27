// Write a JavaScript program to find the sum of squares of the elements of an array.

let myArr1 = [2,10,15]
console.log(`Sum of elements of array is ${arraySumCalculator(myArr1)}`)

function arraySumCalculator(fnMyArr1) {
    let sumOfSqOfElements = 0;

    for (let index = 0; index < fnMyArr1.length; index++) {
        sumOfSqOfElements = sumOfSqOfElements + Math.pow(fnMyArr1[index], 2);
    }
    return sumOfSqOfElements;
}