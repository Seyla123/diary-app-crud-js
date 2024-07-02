
/**
 * This function checks if the user is logged in.
 * If the user is not logged in, it redirects them to the login page.
 */
function authorize(){
    const isLogined = JSON.parse(localStorage.getItem("isLogined")) ? true : false;
    console.log('auth : ', isLogined);
  if(!isLogined){
    window.location.href = '../pages/login.html';
  }
}

/**
 * This function sets the user as logged in.
 * It calls the authorize function to check if the user is logged in.
 */
function setLoginStatus(){
    localStorage.setItem("isLogined", JSON.stringify([true]));
    authorize();
}

/**
 * This function sets the user as logged out.
 * It calls the authorize function to check if the user is logged in.
 */
function setLogoutStatus(){
    localStorage.removeItem('isLogined');
    window.location.href = '../'
    authorize();
}
