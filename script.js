//your JS code here. If required.
function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function displayMessage() {
	const text = documnet.getElementById("text").value;
	const delay = Number(document.getElementById("delay").value);
	const output = document.getElementById("output");

output.textContent = "";

if (!text || inNaN(delay) || delay < 0){
	output.textContent = "please enter valid text and delay.";
	return;
}
await wait(delay);
output.textContect = text;
}
document.getElementById("btn").addEventListener("click",displayMessage);