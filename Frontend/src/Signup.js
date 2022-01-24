import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import Swal from "sweetalert2";
import './login.scss';
export function Signup() {
  const [userName, setUser] = useState('');
  const [userPassword, setPassword] = useState('');
  const [data, setData] = useState([])
  const [pass, setPass] = useState([])
  // useEffect(() => {
  //   let myData = JSON.parse(window.localStorage.getItem('username'))
  //   let myPass = JSON.parse(window.localStorage.getItem('password'))
  //   // console.log("****",myData);
  //   // console.log("++++",myPass);
  //   if (!myData) {
  //     window.localStorage.setItem('username', JSON.stringify(["atif"]))
  //     window.localStorage.setItem('password', JSON.stringify(["1111"]))
  //   }
  //   else {
  //     setData(myData)
  //     setPass(myPass)
  //   }
  // }, [])
  const navigate = useNavigate();

  function handleCurrentData(e) {
    setUser(e.target.value);
  }
  function handleCurrentPassword(e) {
    setPassword(e.target.value);
  }
  function SaveData(e) {
    console.log("elknfklenflkefnlkflkekllllll");
    e.preventDefault()
    let myData = JSON.parse(window.localStorage.getItem('username'))
    let myPass = JSON.parse(window.localStorage.getItem('password'))
    window.localStorage.setItem('username', JSON.stringify([...myData, userName]))
    window.localStorage.setItem('password', JSON.stringify([...myPass, userPassword]))
    setData(JSON.parse(window.localStorage.getItem('username')))
    setPass(JSON.parse(window.localStorage.getItem('password')))
    navigate('/')
  }



  return (
    
    <div className="form1">
      <h1 id="heading">Sign Up</h1>
        <form >
          <label className="email1" htmlFor="email">Username</label><br /><br />
          <input type="text" id="email" value={userName} onChange={handleCurrentData} name="email" placeholder="Enter username" required /><br /><br />

          <label className="email1" htmlFor="password">Password</label><br /><br />
          <input type="password" id="email" value={userPassword} onChange={handleCurrentPassword} name="password" placeholder="Enter password" required /><br /><br />
          <input className="signin" onClick={SaveData} type="submit" defaultValue="Sign in" />
          
        </form>
      </div>
  )
}