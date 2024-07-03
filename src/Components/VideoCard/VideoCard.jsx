import React from 'react'
import "./Video.css";
import { Link } from 'react-router-dom';

const VideoCard = ({value}) => {
    
  return (
    
     <Link to={`video/${value.category}/${value.id}`} className='videocard'>
       <div className='thamb-img'>
          <img src={value.thumbnail} alt="" />
       </div>
       <div className='card-text'>
         <div className='subscription'>
           <img src={value.subImage} alt="" />
         </div>
         <div className="video-text">
           <h4>{value.title}</h4>
           <span className='subName'>{value.subName}</span>
           <div className='view'>
             <span>{value.views} views</span>
             <span>.</span>
             <span>{value.time} year ago</span>
           </div>
         </div>
       </div>
     </Link>

   
  )
}

export default VideoCard