alert("Fortnite");
function displayResult() {
    document.getElementById("something").innerHTML = Date()
};

var click = 0;



function cpsTest() {
    click++;
    document.getElementById("something").innerHTML = click;
    setTimeout(function() {cps = click / 10; 
    document.getElementById("totalclicks")(`You have ${cps} clicks per second! Noob!`); 
    document.getElementById("something").innerHTML = "Click the button to play again!"}, 10000)
    }


