//input section
let numbers = []; // Empty array to store number
let userInput; //collect user input

while (true){
    userInput = prompt("This program collects numbers and returns the first number.\nType stop to exit:")
    //Exit condition from the infinite loop.
    if (userInput == "stop") {
        break;

    }

    //Populate the array
    userInput = numbers(userInput);
    numbers.push(userInput);
   
}

//Function to get the first element of the array.
function firstElementArray(array){
    return array[0];
}