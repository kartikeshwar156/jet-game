let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'chemisrty is WooW !, ' + myName;
  }
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'chemisrty is WooW !, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
