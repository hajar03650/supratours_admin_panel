document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate input
    if (!username || !password) {
        boxAlert("Both fields are required", "red");
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "username": username.toString(), "password": password.toString() }) // Ensure the field names match your API
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            boxAlert("Login successful", "green");
            setTimeout(() => {
                window.location.href = "/";
            }, 3000);
        } else {
            boxAlert("Login unsuccessful: " + (data.detail || "Unknown error"), "red");
        }
    } catch (error) {
        boxAlert("Network error", "red");
        console.error("Network error: " + error.message);
    }
});

// Toggle password field based on email input
let usernameField = document.getElementById('username');
let passwordField = document.getElementById('password');

usernameField.addEventListener("input", () => {
    if (usernameField.value.length > 0) {
        passwordField.removeAttribute("disabled");
    } else {
        passwordField.setAttribute("disabled", "disabled");
    }
});
