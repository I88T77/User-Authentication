import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import person2 from './localStorage';
import './login.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
export function Login({setlocalstorage}) {
  const [name, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleCurrentData(e) {
    setUser(e.target.value);
  }
  function handleCurrentPassword(e) {
    setPassword(e.target.value);
  }

  useEffect(()=>{
    const userinfo = localStorage.getItem("token");
    if(userinfo){
      navigate("/bloglist");
    }
  },[navigate]);
 
  const submit1=async (e)=> {
    console.log("elknfklenflkefnlkflkekllllll");
    console.log("name,password",name,password);
    e.preventDefault()
    try{
      const config={
        headers:{
          "Content-type":"application/json",
        },
      };
      const {data} = await axios.post("http://localhost:4000/api/users/login",{name,password},config);
      console.log("data",data);
      localStorage.setItem("token",JSON.stringify(data.token));
      navigate('/bloglist');
    }
    catch(error){
      console.log("error",error.response.data);
    }
  }



  return (
    
    // <div className="form1">
    //   <h1 id="heading">Log in</h1>
    //     <form >
    //       <label className="email1" htmlFor="email">name</label><br /><br />
    //       <input type="text" id="email" value={name} onChange={handleCurrentData} name="email" placeholder="Enter name" required /><br /><br />

    //       <label className="email1" htmlFor="password">Password</label><br /><br />
    //       <input type="password" id="email" value={password} onChange={handleCurrentPassword} name="password" placeholder="Enter password" required /><br /><br />
    //       <input className="signin" onClick={submit1} type="submit" defaultValue="Sign in" />
          
    //     </form>
    //   </div>
    <div className='logincard'>
      <div className='card1'>
        <div className='imagecard'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7snPsSk9-sUVD5q7xIWKpfpmYhwmgs6nNA&usqp=CAU' width="550px"/>
        </div>
        <div className='card2'>
        <p className='loginheading'>Login</p>
        <div className='avatarlogin'>
          <img src='https://media.istockphoto.com/vectors/user-profile-or-my-account-avatar-login-icon-with-man-male-face-smile-vector-id1224774389?k=20&m=1224774389&s=170667a&w=0&h=0u7Arol2CQZF-rG58MtRT8kIO9c5_zC2OvABYPmH6tU=' width="180px"/>
        </div>
        <form className='inputfield'>
        <i class="fa fa-user" aria-hidden="true"></i>
        <input type="text" id="email" value={name} onChange={handleCurrentData} name="email" placeholder="name" /><br /><br />
        <i class="fa fa-lock" aria-hidden="true"></i>
        <input type="password" id="email" value={password} onChange={handleCurrentPassword} name="password" placeholder="password"/>
        <Link to = '/reset'>
        <div className='resetPass'>
        Forgot Password
        </div>
        </Link>
        <div className="buttonlogin"onClick={submit1}>Log in</div>
        </form>
        </div>
      </div>
    </div>
  )
}