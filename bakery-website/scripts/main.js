// Get the form element by its ID
const form = document.getElementById("contactForm");

// Add a listener that runs when the form is submitted
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop the form from refreshing the page

  // Get values from the form
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Check if email looks valid
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  // If everything is okay:
  alert("Thank you, " + name + "! Your message has been sent successfully.");
  
  // Clear the form
  form.reset();
});
