// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not.

let array1 = [14,15,16];

if (array1[0] === 2) {
    console.log(`First element of the array is ${array1[0]} & it is prime number`);
}
else if ((array1[0] < 2) || (!isFirstElementPrime(array1))) {
    console.log(`First element of the array is ${array1[0]} & it is not prime number`);
}
else if (isFirstElementPrime(array1)) {
    console.log(`First element of the array is ${array1[0]} & it is prime number`);
}

function isFirstElementPrime(fnArray1) {

    for (let i = 2; i <= (Math.sqrt(fnArray1[0])); i++) {

        if ((fnArray1[0] % i) === 0) {
            return false;
        }

    }

    return true;

}