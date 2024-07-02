import {createAcc} from './auth.js'

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const userlocal = JSON.parse(localStorage.getItem("users")) || [];
    const username = document.querySelector("#username").value.toLowerCase();
    const password = document.querySelector("#password").value;

    // check if user already exist
    const userLog = userlocal.findIndex(user => user.username == username) == -1;

    if(userLog){
        createAcc(username,password);
    }else{
        alert("this account aleady exist. please user other username"); // Display an error message
        signUpForm.reset() // Reset the form
    }
})
