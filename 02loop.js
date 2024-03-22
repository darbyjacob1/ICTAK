let fruits = ["orange","apple","grape","banana"]

// for (let index = 0; index < fruits.length; index++) {
//     console.log(fruits[index]);
// }


// for-of loop used for array

// for (x of fruits) {
//     console.log(x)
// }


// for-each loop used for array

// fruits.forEach(index => {
//     console.log(index);
// });

// for in is used for objects

// let person = {name:"Darby", age:10, place:"KL"}

// for (x in person) {
//         console.log(person[x])
//     }

// while loop is entry-controlled loop

let index = 0;
while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
}