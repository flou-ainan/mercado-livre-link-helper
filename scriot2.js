const input = document.getElementById("input");
const output = document.getElementById("output");
const notification = document.getElementById("notification");

// Add input event listener to clean the URL
input.addEventListener("input", function(event) {
  event.preventDefault();
  remove(); // Call remove() to clean the URL as the user types
});

function notifyCopied() {
  // Show the notification by removing the "hidden" class
  notification.classList.remove("hidden");
  notification.classList.remove("reverse-toast-animation");
  void notification.offsetWidth; // Trigger reflow to restart animation
  notification.classList.add("reverse-toast-animation");
}

function copy() {
  // Get the text from the output element
  const textToCopy = output.textContent || output.innerText; // Use textContent for divs, innerText as fallback

  // Check if there is any text to copy
  if (!textToCopy) {
    console.log('No text to copy');
    return;
  }

  // Use the Clipboard API to copy the text
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      notifyCopied(); // Call your notification function on success
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}

function remove() {
  let link = input.value;
  // Clean the URL by removing query parameters and fragments
  link = link.split("?")[0].split("#")[0];
  output.innerHTML = link; // Update the output element with the cleaned URL
}

function clean() {
  input.value = ""; // Clear the input field
  output.innerHTML = ""; // Optionally clear the output as well
}