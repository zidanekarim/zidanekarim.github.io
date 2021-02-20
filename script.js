var clicks = document.getElementById("clicks")
var simons = 0

var duration = 5;
var startTime = new Date().getTime();


clickbutton.addEventListener("click", function(e) {
    clicks.style.display = "block"
    simons += 1;
    document.getElementById("clicks").innerHTML = `Your total Simons: ${simons}`;
    var secsElapsed = (new Date().getTime() - startTime) / 1000;
    console.log(secsElapsed);
    if (secsElapsed < duration) {
        console.log("Not yet")
    }
    else {
        console.log("Successful")
    }


})
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;



