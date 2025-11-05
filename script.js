

// Function to simulate delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to display message after delay
async function displayMessage() {
  const text = document.getElementById("text").value;
  const delay = Number(document.getElementById("delay").value);
  const output = document.getElementById("output");

  output.textContent = ""; // clear previous output

  if (!text || isNaN(delay) || delay < 0) {
    output.textContent = "Please enter valid text and delay.";
    return;
  }

  await wait(delay); // wait for given delay
  output.textContent = text; // show message
}

// Attach event listener to button
document.getElementById("btn").addEventListener("click", displayMessage);
