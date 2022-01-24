import React from 'react';
import  { useState,useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
// import { fetchBlogs } from './Action/UserAction';
import { Bloglistdetail } from './bloglistdetail';
import './bottomPagination.scss';
import axios from 'axios';
import Pagination from './pagination';



export function Bloglist({setloading,setallblog}){
    
    const[showperpage,setShowperpage] = useState(4);
    const [blogs,setblogs]=useState([]);
    const [pagination,setPagination]=useState({
        start : 0,
        end: showperpage
    })
    useEffect(() => {
        bloglist();
    },[])
    const bloglist= async ()=>{
        const response = await axios.get('http://demo3781918.mockable.io/getblog');
        setblogs(response.data);
    }
    console.log('responseeee',blogs);
    function pagechange(start,end){
        setPagination({start:start,end:end})
    }
    return (

        <div id="allbloglist">
            {
                blogs.length > 0 && <div>
                    <div className='bottomPagination'>
                        {blogs.slice(pagination.start,pagination.end).map(p => <Bloglistdetail key={p.id} blog={p} />)}

                    </div>
                    <div>{<Pagination key={blogs.id} showperpage={showperpage}  pagechange={pagechange} total={blogs.length}/>}</div>
                </div>
            }
        </div>
        
    )
}