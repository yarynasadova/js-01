let greetings = 'Hello';
alert(greetings);

greetings = 'World';
alert(greetings);

let userName = prompt('Enter your name');
alert('Hello ' + userName);

let userAge = parseFloat(prompt('Enter your age'));
alert('Your age is: ' + userAge);

let nextAge = userAge + 1;
alert('Next year you will be: ' + nextAge);

// Data types:
// String
// Number
// Boolean: true, false
// null
// undefined
// Object
// Symbol

let userGender = prompt('Enter gender (m - male, f - female)');

if (userAge < 18 && userGender === 'f') { // <= > >= == === != !== || && 
    alert('You are underage girl');
} else if (userAge < 18 && userGender === 'm') {
    alert('You are underage boy');
} else if (userAge >= 18 && userGender === 'f') {
    alert('You are adult woman');
} else if (userAge >= 18 && userGender === 'm') {
    alert('You are adult man');
} else {
    alert('Wrong input');
}
