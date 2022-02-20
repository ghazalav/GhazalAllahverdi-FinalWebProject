
import React from 'react';
import './info.css';
import Header from './Header';


const MovieInfoCard= (props) => {
  if (!props.mov) return '';
  return (
   <>  
<Header/>
   <div className='total1'>
   <div className="card1">
   <div className="image1">
     <img src={props.mov.urlM} alt={props.mov.nameM}className="imgM1" />
   </div>
 </div>
 <div className="title1">
     <span>
       <b>{props.mov.nameM}</b>
     </span>
   </div>
   <div className="year1">
     <span>({props.mov.years})</span>
   </div>

   <div className="des1">
     <p>{props.mov.des}</p>
   </div>
 </div>

 </>
    
    
  );
}
export default MovieInfoCard;
