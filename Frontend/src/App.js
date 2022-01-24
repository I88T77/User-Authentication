// import './App.css';
import { Layout } from './layout';
// import store from "./store/store";
import { Header } from './header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Blogsite from './Blogsite';
import { Login } from './login';
import { useEffect, useState } from 'react';
import {Reset} from './reset'
function App() {
  const [local,setlocal]=useState();
  useEffect(()=>{
    setlocal(localStorage.getItem('token'));
    console.log("stateeeeee")
  },[local])
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/reset' element={<Reset/>}/>
      <Route exact path='/bloglist' element={local?<Layout/>:<Login/>}/>
      <Route exact path='/blog/:id' element={local?<Blogsite/>:<Login/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Reset/> */}
    </div>
  );
}

export default App;
