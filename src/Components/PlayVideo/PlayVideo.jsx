import React from 'react'
import "./PlayVideo.css"
const PlayVideo = ({value}) => {
  return (
    <div className='playvideo'>
       <div className="video">
         <video src={value.video} controls autoPlay muted />
         <h2>{value.title}</h2>
       </div>
    </div>
  )
}

export default PlayVideo