// for loop practice
const listNumbersContainer = document.getElementById("list-numbers");

for (let i = 1; i < 11; i++) {
  listNumbersContainer.innerHTML += `<li> ${i} </li>`;
}

const reverseListContainer = document.getElementById("reverse-list");
for (let i = 10; i > 0; i--) {
  reverseListContainer.innerHTML += `<li> ${i} </li>`;
}

// const evenContainer = document.getElementById("list-number-even");
// for (int i = 0; i <= 10; i++){
//     if (i % 2 == 0) {
//         evenContainer.innerHTML += `<li> ${i} </li>`;
//     }
// }

const evenContainer = document.getElementById("list-number-even");
for (let i = 2; i <= 10; i += 2) {
  evenContainer.innerHTML += `<li> ${i} </li>`;
}
const oddContainer = document.getElementById("list-number-odd");
for (let i = 1; i <= 11; i += 3) {
  oddContainer.innerHTML += `<li> ${i} </li>`;
}

// const multiplyContainer = document.getElementById("multiplyByFive");
// for (let i = 5; i <= 101; i += 5) {
//   multiplyContainer.innerHTML += `<li> ${i} </li>`;
// }

const multiplyContainer = document.getElementById("multiplyByFive");
for (let i = 1; i <= 100; i++) {
  let result = 5 * i;
  multiplyContainer.innerHTML += `<li> 5 x ${i} = ${result} </li>`;
}
