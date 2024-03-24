let numberChecker = (numbers) => {
    let myArray = ["20", "40", "60"]; 
    if (myArray.includes(numbers) === true) {
        return "This number is already in system";
    } else {
        return "You can add this number"
    }
} 
console.log(numberChecker("50"));