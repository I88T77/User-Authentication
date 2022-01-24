import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Header } from "./header";
import './blogsite.scss';
export default function Blogsite(){
    const[blogs,setblogs]=useState();
    const[loading,setloading]=useState(true);
    
    useEffect(() => {
        bloglist();
        console.log("*******")
    },[])
    const bloglist = async ()=>{
        const response = await axios.get('http://demo3781918.mockable.io/getblog');
        setblogs(response.data);
        console.log("blog inside",blogs);
        setloading(false);
    }
    const {id} = useParams();
    console.log("idddd",id);
    console.log("blogsite",blogs);


    if(!loading){
    const blog2 = blogs.filter(checkid);
    function checkid(blog1){
      return blog1.id===id;
    }
    return(
        <div className="singleblog">
           <img className="imageblog"src={`${blog2[0].urlToImage}`}/>
           <p className="heading">{`${blog2[0].title}`}</p>
           <p className="blogauthor">~ Author: {`${blog2[0].author}`}</p>
           <p className="day">{`${blog2[0].day}`}</p>
           <p className="blogparagraph">{blog2[0].article}</p>
        </div>
    )
}


return(
    <>
      {/* <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt=""/>  */}
    </>
)
}


