// "use strict";

//Calculate Tip
function calculateTip() {
    let billAmt = document.getElementById("billamt").value;
    let serviceQual = document.getElementById("servicequal").value;
    let numOfPeople = document.getElementById("peopleamt").value;

//Validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }
//Check see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

//Calculate tip
    let total = (billAmt * serviceQual) / numOfPeople;
//Round the two decimal places
    total = Math.round(total * 100) / 100;
//Allows us to have two digits after decimal point
    total = total.toFixed(2);
//Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

//Hide the tip amount on load
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";

//Click to call function
    document.getElementById("calculate").onclick = function () {
        calculateTip();
    }
}