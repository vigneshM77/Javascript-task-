// function loginpage(){

//  JSON.parse(localStorage.getItem("username"));

//  JSON.parse(localStorage.getItem("password"));

//     // var c = "username";
//     // var d = "password";
    


// console.log(logindetails)
   
//     var  a = document.getElementById('username').value;
//     var  b = document.getElementById('password').value;

//     if ( a !== c){
//        alert('please check your username')
//     }else if(b !== d) {
//         alert('plz password check')
//     }
//     else{
//         alert('login success')
//         window.location.replace('./js/assesment js.html')
//     }
//  }

// function fun() {
//     localStorage.removeItem("username");
//     localStorage.removeItem("password");
//     localStorage.removeItem("email");
//     localStorage.removeItem("gender");
//     localStorage.removeItem("DOB");
//     localStorage.removeItem("Time");
//     localStorage.removeItem("Category")
    
//     alert('Remove succussfully')
// }



// function loginpage() {
//     const userDetails = JSON.parse(localStorage.getItem("userdetails"));

//     if (!userDetails) {
//         alert('no user details found. please register')
//         return;
//     }

//     const user = userDetails.username;
//     const passkey = userDetails.password;

//     const enteredusername = document.getElementById('uname').value;
//     const enteredPassword = document.getElementById('inputpassword') .value;


// }







function loginpage() {
    // Retrieve and parse the stored user details
    const userDetails = JSON.parse(localStorage.getItem("userdetails"));

    // Ensure userDetails is not null before proceeding
    if (!userDetails) {
        alert('No user details found. Please register.');
        return;
    }

    // Extract the stored username and password
    const storedUsername = userDetails.username;
    const storedPassword = userDetails.password;

    // Get the entered username and password
    const enteredusername = document.getElementById('uname').value;
    const enteredPassword = document.getElementById('inputPassword') .value;

    // Validate the entered credentials
    if (enteredusername !== storedUsername) {
        alert('Please check your username');
    } else if (enteredPassword !== storedPassword) {
        alert('Please check your password');
    } else {
        alert('Login successful'); 
        window.location.replace('../final assesment javascript/assesment js.html');
    }
}

function fun() {
    // Remove all user-related items from local storage
    localStorage.removeItem("userdetails");
    
    alert('Removed successfully');
}
