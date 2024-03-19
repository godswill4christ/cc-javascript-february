const person = {
    fname : "John",
    lname : "Doe",
    age : 25
};

// let txt = "";
// for (let x in person){
//     txt += person[x]; + " ";
//     console.log(txt)
// }

// let txt = "";
// txt = txt + "Hello";
// console.log(txt)

person.nationality = 'Nigerian';

console.log(person);

delete person.nationality;

console.log(person);
