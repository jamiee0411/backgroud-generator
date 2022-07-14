// HTML color picker
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

// Verify we are selecting the necessary elements (vars)
// console.log(css);
// console.log(color1);
// console.log(color2);

// Detect input value changes and change gradient accordingly
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	// Display color values in h3
	css.textContent = body.style.background + ";"; 
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
