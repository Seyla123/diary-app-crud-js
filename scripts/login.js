
/**
 * This script is responsible for handling the form submission of the login page.
 * It prevents the default form submission behavior, checks if the provided username and password
 * match any of the users in the user array, and then either sets the login status and redirects
 * to the index page or displays an error message and resets the form.
 */

import {setLoginStatus} from './auth.js'

const formLogin = document.querySelector("#login-form");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const user = JSON.parse(localStorage.getItem("users")) || [];
    const username = document.querySelector("#username").value.toLowerCase();
    const password = document.querySelector("#password").value;
    const userLog = user.findIndex(user => user.username == username && user.password == password) !== -1;
    
    if(userLog){
        setLoginStatus(username); // Set the login status
        window.location.href = "../index.html"; // Redirect to the index page
    }else{
        alert("Invalid Username or Password"); // Display an error message
        formLogin.reset() // Reset the form
    }
})
