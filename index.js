// Create an Array of at least 3 losing messages
const losingMessage = ["So sorry, wrong answer!", "Wrong answer!", "Please try again - wrong answer!"]

// Create variables to count wins and losses
var wins = 0;
var losses = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var myMessage = document.getElementById('message');
var countWins = document.getElementById('wins');
var userLosses = document.getElementById('losses');

// target all .box elements and attach a click event listener to each one using a loop
var allBoxes = document.querySelectorAll('.box');

allBoxes.forEach(function(box) {
    box.onclick = clickListen;
})

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

function clickListen(event) {
    var clickedBox = event.target.textContent;
    var newCB = parseInt(clickedBox);
    var winningBox = Math.floor(Math.random() * 3) + 1;

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
        if (newCB === winningBox) {
            wins++;
            document.getElementById('message').textContent = 'Congratulations!';
            document.getElementById('wins').textContent = "Wins: " + wins;
        }

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
        else if (newCB != winningBox) {
            losses++;
            document.getElementById('losses').textContent = "Losses: " + losses;
            const randomMessage = Math.floor(Math.random(losingMessage) * 3)
            document.getElementById('message').innerHTML = losingMessage[randomMessage];
        };
    }