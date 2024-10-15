//wait for the DOM to finish loading before running the game.
// Get the buttons and add event listener to them.

document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if ( this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame(){
// Creates two random numbers between 1 and 25

let num1 = Math.ceil(Math.random()) * 25;
let num2 = Math.ceil(Math.random()) * 25;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer () {

}

function displayAdditionQuestion () {

}

function displaySubtractQuestion () {

}

function displayMultiplyQuestion () {

}

function displayDivisionQuestion () {

}