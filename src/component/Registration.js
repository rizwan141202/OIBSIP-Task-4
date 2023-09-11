import React from 'react';
import { Link } from 'react-router-dom';
import {encrypt,decrypt} from 'n-krypta';


const Registration = () => {
let userdata = [];

let objstr = localStorage.getItem('user');
if(objstr != null){
    userdata = JSON.parse(objstr);
}

function data(){
  const username = document.getElementById("uname");
const userpwd = document.getElementById("pwd");
const usercpwd = document.getElementById("cpwd");
   if (username.value=="") {
    window.alert("name field is required");
   }
   else if (userpwd=="") {
    window.alert("password field is required");
   }
   else if (usercpwd=="") {
    window.alert("confirm password field is required");
   }else if (userpwd.value.length < 8) {
    alert("password length must be greater than 8")
  }else if (usercpwd.value.length < 8) {
    alert("confirm password length must be greater than 8")
  }
  else if(userpwd.value != usercpwd.value)
  {
     window.alert("password must be same");
  }else if(userdata.find(e=> e.name === username.value)){
    window.alert("Already registered !");
    username.value='';
    userpwd.value='';
    usercpwd.value='';
  }
  else{
    const secretkey = 'key';
    const str=userpwd.value;
    const enc=encrypt(str, secretkey);
    const str1=usercpwd.value;
    const enc1=encrypt(str1, secretkey);
    userdata.push({'name': username.value,'pwd':enc, 'cpwd':enc1});
    console.log(userdata);
    saveinfo(userdata);
    window.alert("Registered Successfully!");
    username.value='';
    userpwd.value='';
    usercpwd.value='';
  }
  }
  function saveinfo(userdata){
    let str = JSON.stringify(userdata);
    localStorage.setItem('user',str);
}

  return (
    <div className="container">
        <div class="registration form">
        <header>Signup</header>
        <form>
          <input type="text" id='uname' placeholder="Enter username" />
          <input type="password" id='pwd' placeholder="Create a password"/>
          <input type="password" id='cpwd' placeholder="Confirm your password"/>
          <input type="button" onClick={data} class="button" value="Signup"/>
        </form>
        <div class="signup">
          <span class="signup">Already have an account?
           <label> <Link to={'/login'}> Login </Link></label>
          </span>
        </div>
      </div>
      
      </div>

      
  )
}

export default Registration
