//if statements
// let yourName = "Andy";

// if (confirm("Are you " + yourName + "?"));

// function login() {
//   //console.log("Hello");

//   //   create DB variables for password and email
//   let userDB = "amgarcia.dev@gmail.com";
//   let passDB = "Test1234";

//   // get the values from user (prompt)
//   let user = document.getElementById("txtUserName");
//   let password = document.getElementById("txtPassword");
//   console.log(user, password);

//   // compare DB values and user values
//   if (user === userDB && password === passDB) {
//     // display welcome messge
//     document.getElementById(
//       "notifications"
//     ).innerHTML = `Welcome to the system ${user}`;
//   } else {
//     // display invalid credentials
//     document.getElementById("notifications").innerHTML = `Invalid credentials`;
//   }
// }

// function register() {
//   let student = document.getElementById("txtStudent").value;

//   document.getElementById("studentsList").innerHTML += `<li>
//         ${student}</li>
//         `;
// }

function convertTemperature() {
  //data from user input
  const tempInput = document.getElementById("tempInput").value;
  const select = document.getElementById("scale");
  const results = document.getElementById("conversionResults");

  const start = Number(tempInput);
  const scale = select.value;

  if (scale === "C") {
    const farenheit = (start * 9) / 5 + 32;
    results.innerHTML = `${start} °C is ${farenheit.toFixed(2)}`;
  } else if (scale === "F") {
    const celsius = ((start - 32) * 5) / 9;
    results.innerHTML = `${start} °F is ${celsius.toFixed(2)}`;
  }
}
