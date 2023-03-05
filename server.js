function register(event) {
    event.preventDefault();
    // getting data from html to js
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData = { name: userName, email: userEmail, password: userPassword }

    // storing data from js to ls
    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLS, 'dataFromLS')
    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail) {
            flag = true;
        }
    }
    if (flag === true) {
        alert("Email already Present, User another one.")
    } else if (userPassword.length < 1 && userName.length < 1 && userEmail < 1) {
        alert("Must Fill all fields!")
    } else if (userPassword.length < 8) {
        alert("Password must be more than 8 Digit!")
    } else {
        dataFromLS.push(userData);
        localStorage.setItem("userData", JSON.stringify(dataFromLS));
        document.getElementById("userName").value = '';
        document.getElementById("userEmail").value = '';
        document.getElementById("userPassword").value = '';
        window.location.href = "/login.html";
        alert("Registration Done.");
    }
}


// Name 
// number 
// email 
// password
// confirm password




function gettingDataFromHtmlToJsForEmail() {
    var userEmail = document.getElementById("email").value;
    return userEmail
}
function gettingDataFromHtmlToJsForPassword() {
    var userPassword = document.getElementById("password").value;
    return userPassword
}
function datafromLS() {
    var datafromLS = JSON.parse(localStorage.getItem("userData"));
    return datafromLS;
}

function compare(datafromLS, userEmail, userPassword) {
    var rocky = false;
    for (var i = 0; i < datafromLS.length; i++) {
        if (datafromLS[i].email === userEmail && datafromLS[i].password === userPassword) {
            rocky = true;
        }
    }
    return rocky;
}


function login(event) {
    event.preventDefault();
    console.log(gettingDataFromHtmlToJsForEmail());
    console.log(gettingDataFromHtmlToJsForPassword());

    console.log(datafromLS())

    compare(datafromLS(),)


    // console.log(flag,"flag herer")
    if (rocky === true) {
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        window.location.href = '/home.html';
        alert("Logged in successfull.")
    } else {
        alert("Wrong cred, Please check your email and password.");
    }
}

var gettingEmail;

function forgetPassword() {
    // alert("Worked")
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    var userEmail = document.getElementById("email").value;
    gettingEmail = userEmail;
    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail) {
            flag = true;
        }
    }

    if (flag === true) {
        var newCode = `<input type="password" id="password" /><br/><button onclick="newPassword()">Set new Password</button>`
        // window.location.href = '/new-pass.html';
        var divFromHtml = document.getElementById("change")
        divFromHtml.innerHTML = newCode;
        alert("Now Set new password...")
    } else {
        alert("Your email not in our db, check email again.")
    }

}

function newPassword() {
    var userPassword = document.getElementById("password").value;
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));

    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === gettingEmail) {
            dataFromLS[i].password = userPassword
        }
    }

    localStorage.setItem('userData', JSON.stringify(dataFromLS));
    gettingEmail = "";
    // console.log(gettingEmail,"gettingEmail");
    window.location.href = '/login.html';
    alert('Password Changed, Now login.')

}



function addToLS(){
    // alert("worked")

    var proName = document.getElementById("name").value;
    var proImage = document.getElementById("image").value;
    var proPrice = document.getElementById("price").value;

    var product = { name :proName, price :proPrice , image:proImage }

    var dataFromLS = JSON.parse(localStorage.getItem("products")) || [] ; 
    dataFromLS.push(product);

    localStorage.setItem("products", JSON.stringify(dataFromLS));
    alert("Product submited!")

}


