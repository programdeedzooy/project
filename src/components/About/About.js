import React from 'react'
import Typed from 'react-typed';
import Tilt from 'react-tilt'
import './About.css'
function About(){
    const para=["I am gunalan, my first own project in React , it help me to build my self confidence... typed.js is used to animation for this page...  i am going to continue update by project link in this site...."]
    return(
        <div className="in">
        <div className="form-style"> 
             <div className="title">
                 About
             </div>
         <Typed
                className="typed"
                strings={para}
                typeSpeed={60}
          />  
        </div>
      
       <div className="form-style">
         <div className="title"> UPCOMING PROJECT'S  </div>
        <div className="typed">
          <div className="grid">
          <Tilt className="Title">
          <div className="Tilt-inner">
            <div className="grid-con">
             three.js    
            </div>
            </div>
            </Tilt>
            <Tilt className="Title">
          <div className="Tilt-inner">
            <div className="grid-con">
             pixil.js
            </div>
          </div>
          </Tilt>
          <Tilt className="Title">
          <div className="Tilt-inner">
            <div className="grid-con">
             flutter
            </div>
          </div>
          </Tilt> 
          <Tilt className="Title">
          <div className="Tilt-inner"> 
            <div className="grid-con">
              model
            </div>
           </div>
          </Tilt> 
          </div>
          
        </div>
        
       </div>
        <div className="form-style">
        
        
          <div className="icons">
            
          </div>
        </div>
      </div>
    )
}
export default About


