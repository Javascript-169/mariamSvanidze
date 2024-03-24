function Calculator(firstNumber, secondNumber, equation){
    
    if (equation === "+") {
        return firstNumber + secondNumber;
    } else if (equation === "-") {
       return firstNumber - secondNumber;
    } else if (equation === "*") {
        return firstNumber * secondNumber;
    } else if (equation === "/" && secondNumber !== 0) {
     return firstNumber / secondNumber;
    }  else if (equation === "/" && secondNumber === 0) {
    return "Sorry devision by zero is not possible";
    } else {
        return "I do not know what you mean";
    }
}
   console.log(Calculator(5,0, "/"));



//or

// let firstNumber = parseFloat(prompt("Enter first desired number"));
// let equation = prompt("Enter + - * or /");
// let secondNumber = parseFloat(prompt("Enter second desired number"));

// if (equation === "+") {
//     alert(firstNumber + secondNumber);
// } else if (equation === "-") {
//     alert(firstNumber - secondNumber);
// } else if (equation === "*") {
//     alert(firstNumber * secondNumber);
// } else if (equation === "/") {
//     if (secondNumber !== 0 ) {
//     alert(firstNumber / secondNumber);} 
//     else { alert ("Sorry devision by zero is not possible.")
//     }
// } else {
//     alert("Sorry, I do not understand what you mean.");
// }
  
