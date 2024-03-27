// Write a JavaScript program to find the most frequent item of an array

let array1 = [];
let arr2 = [];

let mostFrequentOccurItem;
let occurrenceOfMostFrequentItem = 0;

if (array1.length > 0) {
    for (let index = 0; index < array1.length; index++) {
        let tempCounter = occurrenceOfArrayItem(array1,index);

        if (tempCounter > occurrenceOfMostFrequentItem) {
            occurrenceOfMostFrequentItem = tempCounter;
            arr2.splice(0,(arr2.length))
            arr2.push(array1[index]);
        }
        else if (tempCounter === occurrenceOfMostFrequentItem) {
            arr2.push(array1[index]);
        }
    }

    if (((arr2.length > 1)) && (occurrenceOfMostFrequentItem > 1)) {
        console.log("Items appearing most frequently are " + arr2 + " & each item occurs " + occurrenceOfMostFrequentItem + " times")        
    }
    else if (((arr2.length > 1)) && (occurrenceOfMostFrequentItem === 1)) {
        console.log("Items appearing most frequently are " + arr2 + " & each item occurs 1 time")        
    }
    else if (((arr2.length === 1)) && (occurrenceOfMostFrequentItem > 1)) {
        console.log("Item appearing most frequently is " + arr2 + " & it occurs " + occurrenceOfMostFrequentItem + " times")        
    }
    else if (((arr2.length === 1)) && (occurrenceOfMostFrequentItem === 1)) {
        console.log("Item appearing most frequently is " + arr2 + " & it occurs 1 time")        
    }

}
else {
    console.log("Array does not have any items")
}

function occurrenceOfArrayItem(fnArray1,fnIndex) {
    let itemToBeFound = fnArray1[fnIndex];
    let numberOfOccurrence = 1;
    for (let index = fnIndex + 1; index < fnArray1.length; index++) {
        if (fnArray1[index] === itemToBeFound) {
            numberOfOccurrence++;
        };
    }
    return numberOfOccurrence;
}