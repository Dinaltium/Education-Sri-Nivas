const login = document.getElementById('login');

login.addEventListener('click', loginUser);

const loginUSN = document.getElementById('loginUSN'); // Update to USN
const h1 = document.getElementById('h1');
const loginPass = document.getElementById('loginPass');

function loginUser() {
    if (loginUSN.value === '' || loginPass.value === '') {
        alert('Empty fields');
    }
    console.log(loginUSN.value);
    loginUserRequest(loginUSN.value, loginPass.value);
}

async function loginUserRequest(usn, password) { // Change email to USN
    const user = await fetch('/App/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            usn, // Change to usn
            password,
        }),
    });

    if (!user.ok) {
        alert('Invalid login. Please check your USN or password.');
    } else {
        const data = await user.json();
        alert('Successful login');
        h1.innerHTML = usn;
    }
}
