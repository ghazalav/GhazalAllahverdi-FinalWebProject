import React from "react";
import './headerStyle.css';


const Header = () => {

   
    return(
        <div className="main">
           <div className="mylogo">
              <img src={`${process.env.PUBLIC_URL}/new.png`} alt="Logo"/>
              <div className="img2"> <img src={`${process.env.PUBLIC_URL}/new.png`} alt="Logo"/>
             </div> 
               <div className="topic"><h1>Movie Club</h1></div>
           
           </div>
        </div>

    );

}
export default Header;