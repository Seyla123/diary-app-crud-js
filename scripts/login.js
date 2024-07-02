import {setLoginStatus} from './auth.js'

const formLogin = document.querySelector("#loginForm");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = [
        {
            'id' : 1,
            'username' : 'admin',
            'password' : 'admin'
        }
    ]
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const userLog = user.findIndex(user => user.username == username && user.password == password) !== -1;
    if(userLog){
        setLoginStatus(username);
        window.location.href = "../index.html";
    }else{
        console.log("Invalid Username or Password");
        formLogin.reset()
    }
})