// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not.

let array1 = [4,2,3,4,5];

if (isFirstElementPrime(array1)) {
    console.log("First element of the array is prime");
}
else {
    console.log("First element of the array is not prime")
}

function isFirstElementPrime(fnArray1) {
    if (((fnArray1[0] % 2) === 1) && (fnArray1[0] > 1)) {
        return true
    }
    else {
        return false;
    }
}