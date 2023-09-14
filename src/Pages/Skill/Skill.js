// import React, { useState } from 'react';
// import './Skill.css';
// import { FaHtml5 } from "react-icons/fa";
// const Skill = () => {
//     const [val,setValue]=useState({
//       html:80,
//       css:70,
//       bootstrab:50,
//       javascript:70,
//       React:70

//     });
//     const handleRange = (e) => {
//       const { name, value } = e.target;
//       setValue((prevVal) => ({
//         ...prevVal, // Spread the previous state
//         [name]: value, // Update the specific property
//       }));
//     };
//   return (
//     <div>
   
// <div className='techskill'>
//   <div className='techskill-container'>
//     <div className='techcont-left'>
//       <div>
//       <FaHtml5 className='skill-icon'/>
//         <input className='rang'  type='range' name="html" value={val.html} min={0} max={100} onChange={handleRange}/>
//         <span>{val}</span>
//       </div>
//       <div>
//       <FaHtml5 className='skill-icon'/>
//         <input className='rang'  type='range' name="css" value={val.css} min={0} max={100} onChange={handleRange}/>
//         <span>{val}</span>
//       </div>
//       <div>
//       <FaHtml5 className='skill-icon'/>
//         <input className='rang'  type='range' name="bootstrab" value={val.bootstrab} min={0} max={100} onChange={handleRange}/>
//         <span>{val}</span>
//       </div>
//       <div>
//       <FaHtml5 className='skill-icon'/>
//         <input className='rang'  type='range' name="javascript" value={val.javascript} min={0} max={100} onChange={handleRange}/>
//         <span>{val}</span>
//       </div>
//       <div>
//       <FaHtml5 className='skill-icon'/>
//         <input className='rang'  type='range' name="Raect" value={val.React} min={0} max={100} onChange={handleRange}/>
//         <span>{val}</span>
//       </div>

//     </div>
//     <div className='techcont-right'>

//     </div>

//   </div>

// </div>


//     </div>
//   )
// }

// export default Skill

import React, { useEffect, useState } from 'react';
import './Skill.css';
import { FaHtml5 ,FaCss3Alt,FaBootstrap,FaReacteurope,FaJava} from "react-icons/fa";
import {TbBrandJavascript } from "react-icons/tb";
import { SiSpringboot,SiMongodb } from "react-icons/si";
const Skill = () => {
  const [visible,setVisible]=useState(false);
  const [val, setValue] = useState({
    html: 80,
    css: 70,
    bootstrab: 50,
    javascript: 70,
    React: 70,
    java:60,
    springboot:50,
    mongodb:50
  });

  const handleRange = (e) => {
    const { name, value } = e.target;
    setValue((prevVal) => ({
      ...prevVal, 
      [name]: value, 
    }));
  };
  const handleContent=()=>{
    if(window.scrollY >700){
      setVisible(true);

    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleContent);
    return ()=>{window.removeEventListener("scroll",handleContent)}
  },[])

  return (
    <div>
      <div className='techskill'>
        <div className='techskill-container'>
          <div className='techcont-center'>
            <div>
              <FaHtml5 className={`skill-icon contentvisible ${visible?"show":""}`} />
              <input className='rang' type='range' name="html" value={val.html} min={0} max={100} onChange={handleRange} />
              <span>{val.html}</span> 
            </div>
            <div>
              <FaCss3Alt className='skill-icon' />
              <input className='rang' type='range' name="css" value={val.css} min={0} max={100} onChange={handleRange} />
              <span>{val.css}</span> 
            </div>
            <div>
              <FaBootstrap className='skill-icon' />
              <input className='rang' type='range' name="bootstrab" value={val.bootstrab} min={0} max={100} onChange={handleRange} />
              <span>{val.bootstrab}</span> 
            </div>
            <div>
              <TbBrandJavascript className='skill-icon' />
              <input className='rang' type='range' name="javascript" value={val.javascript} min={0} max={100} onChange={handleRange} />
              <span>{val.javascript}</span>
            </div>
            <div>
              <FaReacteurope className='skill-icon' />
              <input className='rang' type='range' name="React" value={val.React} min={0} max={100} onChange={handleRange} />
              <span>{val.React}</span> 
            </div>
            <div>
              <FaJava className='skill-icon' />
              <input className='rang' type='range' name="java" value={val.java} min={0} max={100} onChange={handleRange} />
              <span>{val.java}</span> 
            </div>
            <div>
              <SiSpringboot className='skill-icon' />
              <input className='rang' type='range' name="springboot" value={val.springboot} min={0} max={100} onChange={handleRange} />
              <span>{val.springboot}</span> 
            </div>
            <div>
              <SiMongodb className='skill-icon' />
              <input className='rang' type='range' name="mongodb" value={val.mongodb} min={0} max={100} onChange={handleRange} />
              <span>{val.mongodb}</span> 
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Skill;
