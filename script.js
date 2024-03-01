
let name = prompt("Hey User, whats is your name?");
let numberOne = Number(prompt(`Hello ${name}, enter the first number here: `));
let numberTwo = Number(prompt(`I appreciate, now I need that you enter the second number: `));

let addiction = numberOne + numberTwo;


alert(`Amazing, now we will calculate boths numbers!`);

alert(`The addiction of your numbers is: ${numberOne + numberTwo}`);
alert(`The subtraction of your number is: ${numberOne - numberTwo}`)
alert(`The multiplication is: ${numberOne * numberTwo}`);
alert(`The division is: ${(numberOne / numberTwo).toFixed(2)}`);
alert(`The remainder of the divsion is: ${numberOne % numberTwo}`);

if(addiction % 2 == 0){
  alert(`The addiction of two number is even: ${addiction}`)
}else{
  alert(`The addiction of two numbers is odd: ${addiction}`)
}

if( numberOne == numberTwo){
  alert(`The first number ${numberOne} is the SAME of second number ${numberTwo}.`)
}else{
  alert(`The first number ${numberOne} is DIFERENT of second number ${numberTwo}.`)
}