import React from 'react'
import "./Video.css";
import { useParams } from 'react-router-dom';
import { data } from '../../Components/data.js';
import PlayVideo from '../../Components/PlayVideo/PlayVideo.jsx';
const Video = () => {
  const {categoryId,videoId} = useParams();
  console.log(videoId+1);
  
  return (
    <div className='video-container'>
       <div className="video-left">

         {data.filter(value => value.category === categoryId && String(value.id)=== videoId).map((value) => (
            <PlayVideo key={value.id} value={value}/>
          ))}

       </div>
        <div className="video-right">

        </div>
    </div>
  )
}

export default Video