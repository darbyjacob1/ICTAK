// Write a JavaScript program to find the most frequent item of an array

let initialArray1 = [];          //Initial Array

let occurrenceOfMostFrequentItem = 0;  //keeps track of the numer of times the most frequently occuring item is present in array

if (initialArray1.length > 0) 
{
        console.log("Item appearing most frequently is " + mostFreqOccItem(initialArray1) + " & each item occurs " + occurrenceOfMostFrequentItem + " times")
}
else {
    console.log("Array is empty")
}

// function below identifies the most frequently occuring item & stores it in array named arrOfMostOccItem
function mostFreqOccItem(fnInitialArray1) {

    let arrOfMostOccItem = [];      //New array to store items that occur most frequently

    for (let i = 0; i < fnInitialArray1.length; i++) {
        //tempCounter will store how many times the i-th item occurs in the array 
        let tempCounter = occurrenceOfArrayItem(fnInitialArray1,i);
        
        //if i-th element occurs more than other elements, it would be stored in new array as the item that occurs the most
        if (tempCounter > occurrenceOfMostFrequentItem) {
            occurrenceOfMostFrequentItem = tempCounter;
            arrOfMostOccItem.splice(0,(arrOfMostOccItem.length))
            arrOfMostOccItem.push(fnInitialArray1[i]);
        }
        //if i-th item occurs as many time as the other most-occur-item, it would be added to new array alongwith other items that occur most
        else if (tempCounter === occurrenceOfMostFrequentItem) {
            arrOfMostOccItem.push(fnInitialArray1[i]);
        }
    }
    return arrOfMostOccItem
}

//function below receives the array + index & uses it to calculates how many times the i-th item occurs in the array 
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