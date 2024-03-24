let number = prompt("Please write the number");
let answer = number * number;
alert(`The square of ${number} is ${answer} `);
 
//or

function Square(valueNumber) {
    return valueNumber * valueNumber;
}   
   console.log(Square(5));