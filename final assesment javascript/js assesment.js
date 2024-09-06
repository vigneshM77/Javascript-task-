function togglePassword() {
    const passwordInput = document.getElementById('inputPassword');
    const passwordToggle = document.querySelector('.password-toggle');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.classList.remove('fa-eye');
        passwordToggle.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        passwordToggle.classList.remove('fa-eye-slash');
        passwordToggle.classList.add('fa-eye');
    }
}
 
function ValidateInputs(event) {
    event.preventDefault();
    
    const uname = document.querySelector('#uname').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#inputPassword').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const dob = document.querySelector('#dob').value;
    const time = document.querySelector('#time').value;
    const category = document.querySelector('#inputDropdown').value;

 

    let errors = [];
    console.log(errors,"hhhhh");
    // Validate username
    // const unamepattern = /^([a-zA-Z0-9_\s]+)$/
    if (uname === "") {
        alert('Username is required.');
    } else if (uname.length < 3) {
        errors.push('Username must be at least 3 characters long.');
    }

    // Validate email using regex
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ;
    if (email === "") {
        errors.push('Email is required.');
    } else if (!emailPattern.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    // Validate password
    // const passwordpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])$/
    if (password === "") {
        errors.push('Password is required.');
    } else if (password.length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }

    // Validate gender
    if (!gender) {
        errors.push('Gender is required.');
    }

    // Validate date of birth
    if (dob === "") {
        errors.push('Date of Birth is required.');
    }

    // Validate time
    if (time === "") {
        errors.push('Time is required.');
    }

    // Validate category
    if (category === "") {
        errors.push('Category is required.');
    }

    // If there are any errors, display them and stop the form submission
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }

    let obj = {
        "username":uname, "email":email , "password":password ,"DOB":dob,"Time": time, "Category": category, 'gender':gender
    }
    let str = JSON.stringify(obj)
// localStorage.setItem("username", uname);

// localStorage.setItem("email", email);

// localStorage.setItem("password", password);

// localStorage.setItem("DOB", dob);

// localStorage.setItem("Time", time);

// localStorage.setItem("Category", category);

// localStorage.setItem('gender' , gender)

localStorage.setItem("userdetails",str)


// localStorage.getItem(JSON.stringify(username,password))
window.location.href = './loginpage js ass.html';

}
