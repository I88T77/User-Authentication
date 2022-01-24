import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import person2 from './localStorage';
import './login.scss';
import axios from 'axios';
export function Reset() {
  const [email, setUser] = useState('');

  function handleCurrentData(e) {
    setUser(e.target.value);
  }

  useEffect(()=>{
  });
 
  const submit1=async (e)=> {
    console.log("elknfklenflkefnlkflkekllllll");
    console.log("email",email);
    e.preventDefault()
    try{
      const config={
        headers:{
          "Content-type":"application/json",
        },
      };
      const {data} = await axios.post("http://localhost:4000/api/users/reset",{email},config);
      console.log("data",data);
    }
    catch(error){
      console.log("error",error.response.data);
    }
  }



  return (
    <div className='logincard'>
      <div className='card1'>
        <div className='imagecard'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7snPsSk9-sUVD5q7xIWKpfpmYhwmgs6nNA&usqp=CAU' width="500px"/>
        </div>
        <div className='card2'>
        <p className='loginheading'>Reset</p>
        <div className='avatarlogin'>
          <img src='https://media.istockphoto.com/vectors/user-profile-or-my-account-avatar-login-icon-with-man-male-face-smile-vector-id1224774389?k=20&m=1224774389&s=170667a&w=0&h=0u7Arol2CQZF-rG58MtRT8kIO9c5_zC2OvABYPmH6tU=' width="180px"/>
        </div>
        <form className='inputfield'>
        <i class="fa fa-user" aria-hidden="true"></i>
        <input type="text" id="email" value={email} onChange={handleCurrentData} name="email" placeholder="email" /><br /><br />
        <div className="buttonlogin"onClick={submit1}>Reset</div>
        </form>
        </div>
      </div>
    </div>
  )
}