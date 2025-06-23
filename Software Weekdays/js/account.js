const account = document.getElementById('account');
const login = document.getElementById('login');
const register = document.getElementById('register');
let backregister = document.getElementById('backregister');
let backlogin = document.getElementById('backlogin');

account.onclick = function () {
    
    // alert("hi");
    login.classList.toggle('swapDisplay');
    register.classList.remove('swapDisplay');
}

backregister.onclick = function (){

     login.classList.remove('swapDisplay');
     register.classList.add('swapDisplay');

}

backlogin.onclick = ()=>{

      register.classList.remove('swapDisplay');
     login.classList.add('swapDisplay');

}