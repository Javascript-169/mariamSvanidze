//Question 1
const drinks = ["Cola", "Fanta", "Sprite","Pepsi"];
console.log(drinks instanceof Array);
  //or
console.log(Array.isArray(drinks));

//Question 2
console.log(drinks[0]); 

//Question 3
console.log(drinks[3]); 

//Question 4
color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
  o = ["th","st","nd","rd"];

  let colorBlue = color[0];
  let numberFirst = o[1];

  console.log(`"1${numberFirst} choice is ${colorBlue}."`);

  let colorGreen = color[1];
  let numberSecond = o[2];

  console.log(`"2${numberSecond} choice is ${colorGreen}."`);

 let colorRed = color[2];
 let numberThird = o[3];

  console.log(`"3${numberThird} choice is ${colorRed}."`);

  //Question 5
  const student = {
    firstName:"Mate",
    lastName:"Gotua",
    age: 30
}
  
student.address = "Tbilisi";
console.log(student.address);

delete student.age;
console.log(student);

student.lastName = "Pochkhua";
console.log(student.lastName);








