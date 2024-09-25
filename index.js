// Grab the dodger element
const dodger = document.getElementById("dodger");

// Change dodger color for visibility
dodger.style.backgroundColor = "#FF69B4";

// Move dodger to a specific position
dodger.style.left = "0px";
dodger.style.bottom = "100px";

// Event listener to move dodger left
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left - 1}px`;
  }
});

// Function to prevent dodger from going off the left edge
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Event listener using moveDodgerLeft()
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// Function to move dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // game field width - dodger width
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener using moveDodgerRight()
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
