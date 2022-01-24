import './header.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
export function Header({setlocalstorage}){
    const navigate=useNavigate();
    
    const logout=()=>{
        
        localStorage.removeItem("token");
        navigate('/');
    }
    return(
        <div className="head1">
           <div className='logo'>
             <img className="logo1"src="https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300" alt="not loaded" width="100%" height="75px"/>
           </div>
           <div className="name">Myblog<div>.</div></div>
           <ul className="topList">
          <li className="topListItem"><a>HOME</a></li>
          <li className="topListItem"><a >ABOUT</a></li>
          <li className="topListItem"><a>CONTACT</a></li>
          <li className="topListItem" onClick={()=>logout()}><a>LOGOUT</a></li>
         </ul>

        </div>
    )
}
