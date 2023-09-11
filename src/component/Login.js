import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { encrypt } from 'n-krypta'



const Login = () => {
  const logpath = useNavigate();
  let userdata=[];
  let objstr = localStorage.getItem('user');
if(objstr != null){
    userdata = JSON.parse(objstr);
}

function check(){
  const userlogname = document.getElementById("name");
    const userlogpwd = document.getElementById("password");
    const secretkey = 'key';
    const str=userlogpwd.value;
    const enc=encrypt(str, secretkey);
  if(userdata.some( uarr => uarr.name == userlogname.value) && userdata.some( uarr => uarr.pwd == enc))
  {
    logpath("/main");
  }else if(userlogname == "")
  {
   alert("name field is required")
  }else if(userlogpwd==""){
    alert("password field is required")
  }else{
    window.alert("Invalid details!");
  }
}

  return (
    <div>
      <div class="container">
    <div class="login form">
      <header>Login</header>
      <form>
        <input type="text" id='name' placeholder="Enter your username"/>
        <input type="password" id='password' placeholder="Enter your password"/>
        <a href="#">Forgot password?</a>
        <input type="button" class="button" value="Login" onClick={check}/>
      </form>
      <div class="signup">
        <span class="signup">Don't have an account?
         <label> <Link to={'/'}>Signup</Link></label>
        </span>
      </div>
    </div>
</div>
    </div>
  )
}

export default Login
