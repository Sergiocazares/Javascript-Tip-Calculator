"use strict";

//Calculate Tip
function calulateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

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
    var total = (billAmt * serviceQual) / numOfPeople;
//Round the two decimal places
    total = Math.round(total * 100) / 100;
//Allows us to have two digits after decimal point
    total = total.toFixed(2);
//Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}