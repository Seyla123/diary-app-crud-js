
/**
 * This function checks if the user is logged in.
 * If the user is not logged in, it redirects them to the login page.
 */
const authorize = () => {
    const isLogined = JSON.parse(localStorage.getItem("isLogined")) || false;
    console.log('auth : ', isLogined);
  if(!isLogined){
    setTimeout(() => {
        alert("Please Login");
        window.location.href = '../pages/login.html';
    },1000)
  }
}

/**
 * This function sets the user as logged in.
 * It calls the authorize function to check if the user is logged in.
 */
const setLoginStatus = (username) =>{
    localStorage.setItem("isLogined", JSON.stringify(username));

    authorize();
}

/**
 * This function sets the user as logged out.
 * It calls the authorize function to check if the user is logged in.
 */
const setLogoutStatus = () =>{
    localStorage.removeItem('isLogined');
    authorize();
}

export {authorize,setLoginStatus,setLogoutStatus}