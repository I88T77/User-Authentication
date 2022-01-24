import {useState,useEffect} from "react";
import './pagination.scss'
const Pagination=({showperpage,pagechange,total})=>{
    const [counter,setCounter] = useState(1);
    const [numberOfButtons, setNumberOfButoons] = useState(
        Math.ceil(total / showperpage)
      );
      console.log("statecounter",counter)
    useEffect(()=>{
        const value=showperpage*counter;
        pagechange(value-showperpage,value);
        console.log("{{{{",total);
    },[counter]);
    const buttonclick = (type) => {
        if (type === "prev") {
          if (counter === 1) {
            setCounter(1);
          } else {
            setCounter(counter - 1);
          }
        } else if (type === "next") {
          if (numberOfButtons === counter) {
            setCounter(counter);
          } else {
            setCounter(counter + 1);
          }
        }
      };
      function handlecurrentdata(e){
          console.log("handlecurrentdata",e.target.value);
          setCounter(e.target.value);
      }
    return(
        <div className="pagination">
          {/* <div><p className="page">Page {counter} of {numberOfButtons}</p> </div> */}
  <div onClick={()=>buttonclick("prev")} className="pagebutton">&lt;</div>

  {new Array(numberOfButtons).fill("").map((el, index) => (
            <div className={`${index + 1 === counter ? "active" : null}`}>
              <li className="list"onClick={() => setCounter(index+1)}>
                {index + 1}
              </li>
            </div> 
          ))}
          {/* <select className="dropDown" onChange={handlecurrentdata}>
          {new Array(numberOfButtons).fill("").map((el, index) => (
            
              <option value={index+1} key={index} >{index+1}</option>
        
          ))}
          </select> */}

  <div onClick={()=>buttonclick("next")} className="pagebutton">&gt;</div>
</div>
    )
}
export default Pagination;
