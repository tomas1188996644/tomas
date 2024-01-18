// Event listener for mousemove on element with ID "No"
let nob = document.getElementById("No");

nob.addEventListener("mousemove", function() {
    let alto = random(1, 10);
    let ancho = random(1, 10);
    console.log(alto, ancho);
    nob.style.gridRow = alto;
    nob.style.gridColumn = ancho;
});

// Helper function to generate random numbers
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Event listener for click on element with ID "Si"
let sib = document.getElementById("Si");

sib.addEventListener("click", function() {
    // Show hidden paragraph
    document.getElementById("p").removeAttribute("hidden");
    console.log("click");

    // Set styles for elements with IDs "1," "Si," and "No"
    document.getElementById("1").style.color = "transparent";
    document.getElementById("Si").style.display = "none";
    document.getElementById("No").style.display = "none";

    // Add a timeout to navigate back after 2 seconds (adjust as needed)
    setTimeout(function() {
        // Navigate back to the previous page
        window.history.back();
    }, 2000);
});
