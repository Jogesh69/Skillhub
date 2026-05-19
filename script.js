function validateLogin(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedData = localStorage.getItem("user");

    if(storedData == null){
        alert("No user found. Please register first.");
        return false;
    }

    let user = JSON.parse(storedData);

    if(email == user.email && password == user.password){

        alert("Login Successful");

        window.location.href = "services.html";

    }
    else{
        alert("Invalid Email or Password");
    }

    return false;
}

function validateRegister(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("regemail").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("regpassword").value;
    let confirmPassword = document.getElementById("confirmpassword").value;

    if(name == ""){
        alert("Name cannot be empty");
        return false;
    }

    if(email == ""){
        alert("Email cannot be empty");
        return false;
    }

    if(phone == ""){
        alert("Phone number cannot be empty");
        return false;
    }

    if(phone.length != 10){
        alert("Phone number must be 10 digits");
        return false;
    }

    if(password == ""){
        alert("Password cannot be empty");
        return false;
    }

    if(password.length < 6){
        alert("Password must contain at least 6 characters");
        return false;
    }

    if(password != confirmPassword){
        alert("Passwords do not match");
        return false;
    }

    let userData = {
        fullname: name,
        email: email,
        phone: phone,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registration Successful");

    window.location.href = "login.html";

    return false;
}