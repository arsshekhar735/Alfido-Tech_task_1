// Form validation and submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Message sent successfully!");
    } else {
        alert("Please fill in all fields.");
    }

    // Optionally, you could send the form data to a server here (using fetch or an API)
});
