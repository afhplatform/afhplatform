document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Check if username is "user" and password is "AB12-CD34-EF56-GH78"
    if (username === "user" && password === "AB12-CD34-EF56-GH78") {
        // Redirect to the 4th video page
        window.location.href = 'list/index.html';
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
