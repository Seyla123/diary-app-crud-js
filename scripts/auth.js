
function authorize(){
    const isLogined = JSON.parse(localStorage.getItem("isLogined")) ? true : false;
    console.log('auth : ', isLogined);
  if(!isLogined){
    window.location.href = '../pages/login.html';
  }
}
function setLoginStatus(){
    localStorage.setItem("isLogined", JSON.stringify([true]));
    authorize();
}
function setLogoutStatus(){
    localStorage.removeItem('isLogined');
    authorize();
}