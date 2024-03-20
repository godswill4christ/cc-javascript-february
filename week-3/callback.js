// function sayHello(){
//     return console.log("Hello");

// }
// setInterval(sayHello, 1000);

const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const positiveNumbers = removeNegative(myNumbers, (x) => x >= 0);

document.getElementById("callback").innerHTML = positiveNumbers;

function removeNegative(numbers,callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}
