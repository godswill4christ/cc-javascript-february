//input
let userInput;

while (true) {
    userInput = prompt("This is an infinite loop.\Type 'okay' to stop");

    if (userInput == 'okay') {
        break
    }

    alert("Hello");
}