window.addEventListener("load", init, false);

function init() {
    var wally = document.getElementById("wally");
    var notWally = document.getElementById("notWally")
    wally.addEventListener("click", displayMessage);
    notWally.addEventListener("click", displayHint);
}

function displayMessage() {
    alert("You found Wally!");
}

function displayHint() {
    var hints = ["Good! You've almost found him.", "Try again.", "Keep trying!", "You're close. Keep trying."];

    var index = Math.floor(Math.random() * 4);

    alert(hints[index]);
}