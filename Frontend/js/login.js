document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem('token', data.token);
        boxAlert("Login successful","green");
        setTimeout(() => {
            window.location.href = "/";
        }, 3000);
    } else {
        boxAlert("Login unsuccessful","red");
    }
});

let email = document.getElementById('email');
email.addEventListener("input", () => {
    if (email.value.length > 0) {
        document.getElementById('password').removeAttribute("disabled");
    } else {
        document.getElementById('password').setAttribute("disabled","true");
    }
});