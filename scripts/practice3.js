//if statements
let yourName = "Andy";

if (confirm("Are you " + yourName + "?"));

function login() {
  //console.log("Hello");

  //   create DB variables for password and email
  let userDB = "amgarcia.dev@gmail.com";
  let passDB = "Test1234";

  // get the values from user (prompt)
  let user = document.getElementById("txtUserName");
  let password = document.getElementById("txtPassword");
  console.log(user, password);

  // compare DB values and user values
  if (user === userDB && password === passDB) {
    // display welcome messge
    document.getElementById(
      "notifications"
    ).innerHTML = `Welcome to the system ${user}`;
  } else {
    // display invalid credentials
    document.getElementById("notifications").innerHTML = `Invalid credentials`;
  }
}

function register() {
  let student = document.getElementById("txtStudent").value;

  document.getElementById("studentsList").innerHTML += `<li>
        ${student}</li>
        `;
}
