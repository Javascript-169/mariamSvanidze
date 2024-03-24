let costumerYear = prompt("Enter desired year to see if it is a leap year");

if (costumerYear % 4 === 0 && costumerYear % 100 !== 0 || costumerYear % 400 === 0) {
    alert(`${costumerYear} is a leap year!`);
} else {
    alert(`${costumerYear} is not a leap year!`);
}

  //or 
  
function yearLeap(yearCostumer) {
    if (yearCostumer % 4 === 0 && yearCostumer % 100 !== 0 || yearCostumer % 400 === 0 ) {
        return `${yearCostumer} is a leap year!`;
    } else {
        return `${yearCostumer} is not a leap year!`;
    }
} console.log(yearLeap(2020));