// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

function checkWhetherOdd(number) {
    if ((Math.abs(number % 2)) === 1) {return true}
    else if ((Math.abs(number % 2)) === 0) {return false} 
}

for (let i = -5; i<=15; ++i) {
    if (checkWhetherOdd(i)) {console.log(`Current number is ${i} & it is odd`);}
    else {console.log(`Current number is ${i} & it is even`);}
}