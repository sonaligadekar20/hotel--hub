import React from 'react';
import "./ServiceCard.css";

 export default function ServiceCard({image, title, price}) {
    return (
      
      <div className='servicecard-container'>
        <div>
        <img className="serverimage" src ={image} alt="serverimages" />
        </div>
        
        <p className='servicetitle'> {title}</p>
        <p className='serviceprice'> {price}</p>

      </div> 
    )
   }
