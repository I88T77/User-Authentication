import { Navigate } from 'react-router'
import { Link } from 'react-scroll'
import './header2.scss'
export function Header2(){
    const showlist=()=>{
        
    }
    return(
        <div className="blogimage">
            <img className='blogimage2' src="https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/3e79b/hero.jpg" width="100%" height="450px"/>
            <div >
                <p className='blogwrite'>Time to write something</p>
                <p className='paragraph'>With almost 4 billion people worldwide currently connected <br/>to the internet, there has never been a better time for<br/> businesses to include blogging in their marketing strategy.
                </p>
                <Link to='allbloglist' className='button' smooth={true} duration={700} offset={10} onClick={showlist}>Explore</Link>
            </div>
        </div>
    )
}