function register() {
    let user = document.getElementById("regUser").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPass").value;

    if (user === "" || email === "" || pass === "") {
        alert("Please fill all fields!");
    } else {
        alert("Registration successful!");
        window.location.href = "login.html";
    }
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user === "" || pass === "") {
        alert("Enter username and password!");
    } else {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    }
}
