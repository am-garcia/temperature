console.log("Practice");

//my info//

let myName = "Andy";
let myGrade = 4.0;
let isProfessor = false;

//display values
console.log(myName);
console.log(myGrade);
console.log(isProfessor);

//display value 2
console.log("My name is " + myName);
console.log("My GPA is " + myGrade);
console.log("Active: " + isProfessor);

// numbers

let num1 = 10;
let num2 = 5;

console.log("Mulitiplication: " + num1 * num2);

// Assignment 1
let assignmentName = "Class 1 - Assingment 1";
let description =
  "Assignments are due the day Session 3 is held by 11:59 p.m. (in the time zone in which each student resides). Assignments represent 20% of the overall course grade.";
let pointsAs1 = 6.66;
let pointsAs2 = 6.66;
let pointsAs3 = 6.66;

let total = pointsAs1 + pointsAs2 + pointsAs3;
let fileUploads = true;
let studentAnnotation = false;

let dueDate = "12/20/2023";

let introduction = "Welcome to your new favorite gym";
let customer = "Member Profile";
let fName = "Andy";
let lName = "Garcia";
let customDetails = "Personal Stats";
let height = " 6'0";
let weight = 220;
let age = 30;
let hobbies = "Hobbies";
let hobAnswer = "gym, day trips, foodie";
let goals = "Goals";
let personalGoals = "get jacked";
let satisfaction = "How satisfied are you?";
let satisScale = "From 1 - 5, 5 being VERY, 1 being POOR.";
let satisRating = 4;
let satisReason = "Why this rating?";
let satisResponse = "Needs more cleaning";
let goodbye = "Thank you for visiting our site, see you again!!";
let year = 2023;

document.write(`<h1> ${assignmentName} </h1>`);
document.write(`<p> ${description} </p>`);
document.write(`<h1> ${introduction} </h1>`);
document.write(`<h2> ${customer} </h2>`);
document.write(`<p> ${fName + " " + lName} </p>`);
document.write(`<h3> ${customDetails} </h3>`);
document.write(`<p> Height: ${height} </p>`);
document.write(`<p> Weight: ${weight} </p>`);
document.write(`<p> Age: ${age} </p>`);
document.write(`<h3> ${hobbies}: </h3>`);
document.write(`<p> ${hobAnswer} </p>`);
document.write(`<h3> ${goals}: </h3>`);
document.write(`<p> ${personalGoals} </p>`);
document.write(`<h3> ${satisfaction} </h3>`);
document.write(`<h3> ${satisScale} </h3>`);
document.write(`<h1> ${satisRating} </h1>`);
document.write(`<h3> ${satisReason} </h3>`);
document.write(`<p> ${satisResponse} </p>`);
document.write(`<p> ${goodbye}</p>`);
document.write(`<p> ${year}</p>`);
