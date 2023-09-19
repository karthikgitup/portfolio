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
    if(window.scrollY >850){
      setVisible(true);

    }
  }
  useEffect(()=>{
    
    window.addEventListener("scroll",handleContent);
    return ()=>{window.removeEventListener("scroll",handleContent)}
  },[])

  

  return (
    <div id="skills">
      <div className='techskill'>
      <h2>My Skills</h2>
        <div className='techskill-container'>
        
          <div className='techcont-left'>
         
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Bootstrab</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Mongodb</li>
            </ul> 

          </div>
          <div className='techcont-center'>
            <div>
            <FaHtml5 className ={`skill-icon leftcontentvisible ${visible?"show":""}`}/>
            <div  className={`rightcontentvisible ${visible?"show":""}`} ><input type='range' name="html" value={val.html} min={0} max={100} onChange={handleRange} />  
            <span className='rangeval'>{`${val.html}%`}</span> </div>  
            
            </div>
            <div>
              <FaCss3Alt className={`skill-icon leftcontentvisible ${visible?"show":""}`} />
              <div className={`rightcontentvisible ${visible?"show":""}`} ><input type='range' name="css" value={val.css} min={0} max={100} onChange={handleRange} />
              <span className='rangeval'>{`${val.css}%`}</span> </div>
            </div>
            <div>
              <FaBootstrap className={`skill-icon leftcontentvisible ${visible?"show":""}`}/>
            <div className={`rightcontentvisible ${visible?"show":""}`}  >  <input  type='range' name="bootstrab" value={val.bootstrab} min={0} max={100} onChange={handleRange} />
              <span className='rangeval'>{`${val.bootstrab}%`}</span> </div>
            </div>
            <div>
              <TbBrandJavascript className={`skill-icon leftcontentvisible ${visible?"show":""}`}/>
            <div className={`rightcontentvisible ${visible?"show":""}`} >  <input  type='range' name="javascript" value={val.javascript} min={0} max={100} onChange={handleRange} />
              <span className='rangeval'>{`${val.javascript}%`}</span></div>
            </div>
            <div>
              <FaReacteurope className={`skill-icon leftcontentvisible ${visible?"show":""}`} />
              <div className={`rightcontentvisible ${visible?"show":""}`}  ><input  type='range' name="React" value={val.React} min={0} max={100} onChange={handleRange} />
              <span className='rangeval'>{`${val.React}%`}</span> </div>
            </div>
            <div>
              <FaJava className={`skill-icon leftcontentvisible ${visible?"show":""}`}/>
             <div className={`rightcontentvisible ${visible?"show":""}`} > <input  type='range' name="java" value={val.java} min={0} max={100} onChange={handleRange} />
              <span className='rangeval'>{`${val.java}%`}</span> </div>
            </div>
            <div>
              <SiSpringboot className={`skill-icon leftcontentvisible ${visible?"show":""}`} />
             <div className={`rightcontentvisible ${visible?"show":""}`} > <input type='range' name="springboot" value={val.springboot} min={0} max={100} onChange={handleRange} />
              <span className='rangeval'>{`${val.springboot}%`}</span> </div>
            </div>
            <div>
              <SiMongodb className={`skill-icon leftcontentvisible ${visible?"show":""}`} />
            <div className={`rightcontentvisible ${visible?"show":""}`} >  <input type='range' name="mongodb" value={val.mongodb} min={0} max={100} onChange={handleRange} />
              <span className='rangeval'>{`${val.mongodb}%`}</span> </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Skill;

