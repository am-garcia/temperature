// console.log("Practice 2");
// prompt("Enter your name:");
// let myName = prompt("Enter your name:");
// console.log(myName);

// step 1 create function
function sum() {
  let num1 = Number(prompt("Enter the number1:"));
  let num2 = Number(prompt("Enter the number2:"));
  let total = num1 + num2;

  document.getElementById("results").innerHTML = `<p> ${total} </p>`;
}

function sub() {
  let num1 = Number(prompt("Enter the number1:"));
  let num2 = Number(prompt("Enter the number2:"));
  let total = num1 - num2;

  document.getElementById("results").innerHTML = `<p> ${total} </p>`;
}
// step 2 call and run
//sum(); in the html index
