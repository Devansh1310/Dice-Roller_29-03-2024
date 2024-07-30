const myButton  = document.getElementById("myButton");
const myLabel = document.getElementById( "myLabel" );
const min = 1;
const max = 6;

let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * 6) + min;
    myLabel.textContent = randomNum; // Generate a random number between
}
