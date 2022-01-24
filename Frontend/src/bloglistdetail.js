import React from 'react';
import { Link } from 'react-router-dom';
import './bloglistdetail.scss'
export const Bloglistdetail=({blog})=>{
  console.log("bloggggggg",blog)
    return(
      
      <Link to={`/blog/${blog.id}`}>
        <div className="main">
        <img className="avatar" src={blog.urlToImage} alt="Avatar" />
        <div className='content'>
        <p className="font2">{blog.description}</p>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar2"/>
        <p className="author">{blog.author}</p>
        </div>
        </div>
      </Link>
      
      
        
    )

}