function show() {
    document.getElementById('menu-bar').style.cssText = "left:0%!important;";
    document.getElementById('click').className = "fa fa-times icon";
    document.getElementById('click').setAttribute("onclick", "hide()");
}

function hide() {
    document.getElementById('menu-bar').style.cssText = "left:-100%!important;";
    document.getElementById('click').className = "fa fa-bars icon";
    document.getElementById('click').setAttribute("onclick", "show()");
}

// Getting elements from the DOM
const loginButton = document.getElementById('login'); // Change from 'register' to 'login'
const usn = document.getElementById('loginUSN'); // Adjusted to match HTML input ID
const password = document.getElementById('loginPass'); // Adjusted to match HTML input ID

// Adding event listener for login button
loginButton.addEventListener('click', handleLogin);

function handleLogin() {
    // Check if USN or password is empty
    if (usn.value === '' || password.value === '') {
        alert('USN or password are missing');
        return; // Exit the function if fields are empty
    }

    // Call the login function with the entered USN and password
    login(usn.value, password.value);
}

async function login(usn, password) {
    const response = await fetch('/App/Login', { // Adjust the endpoint for login
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            usn, // Send USN instead of email
            password
        }),
    });

    // Check if the response is OK (status 200)
    if (!response.ok) {
        alert('Invalid credentials, please try again.');
    } else {
        // Successful login - handle redirection or show success message
        alert('Login successful! Redirecting...');
        window.location.href = 'homepage.html'; // Redirect to homepage after successful login
    }

    const data = await response.json();
    console.log(data);
}
