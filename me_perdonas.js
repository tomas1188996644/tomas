// Event listener for mousemove on element with ID "No"
const nob = document.getElementById("No");

nob.addEventListener("mousemove", function() {
    const alto = random(1, 10);
    const ancho = random(1, 10);
    console.log(alto, ancho);
    nob.style.gridRow = alto;
    nob.style.gridColumn = ancho;
});

// Helper function to generate random numbers
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Event listener for click on element with ID "Si"
const sib = document.getElementById("Si");

sib.addEventListener("click", function() {
    // Show hidden paragraph
    document.getElementById("p").removeAttribute("hidden");
    console.log("click");

    // Set styles for elements with IDs "1," "Si," and "No"
    const elementsToHide = ["1", "Si", "No"];
    elementsToHide.forEach(id => {
        document.getElementById(id).style.color = "transparent";
        document.getElementById(id).style.display = "none";
    });

    // Add a timeout to navigate back after 2 seconds (adjust as needed)
    setTimeout(function() {
        // Navigate back to the previous page
        window.history.back();
    }, 2000);
});
