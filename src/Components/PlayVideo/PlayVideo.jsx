import React, { useState } from 'react'
import "./PlayVideo.css"
import {Link} from "react-router-dom"
import bell from "../../assets/bell.png"
import tom from "../../assets/tom.png"
import { commentData } from '../commentData.js'
import Comment from '../Comment/Comment.jsx'

const PlayVideo = ({value}) => {
    const [subButton,setSubButton] = useState(false);
    const [like,setLike] = useState(false);
    const [unlike,setUnLike] = useState(false);
    const [description,setDescription] = useState(false)
  return (
    <div className='playvideo'>
       <div className="video">
         <video src={value.video} controls autoPlay muted />
         <h2>{value.title}</h2>
       </div>
       <div className="subcribe-content">
        <div className="subcribe-content-1">
            <Link to="/profile">
              <img src={value.subImage} alt="" />
               <div className="sub-name">
                <h4>{value.subName}</h4>
                <span>12k  subscribers</span>
               </div>
            
            </Link>
            <button  onClick={()=>setSubButton(!subButton)} className={subButton?"subcribed-button":'sub-button'} >
                {subButton?<>
                  <img src={bell} alt="" />
                  Subscribed
                
                </>:"Subscribe"}
          </button>
        </div>
        <div className="subcribe-content-2">
            <div className="subcribe-1">
            <div className='like' onClick={()=>setLike(!like) && unlike?setUnLike(false):setUnLike(false)}>
                {
                    like?<i class="fa-solid fa-thumbs-up"></i>: <i class="fa-regular fa-thumbs-up"></i>
                }
                <span>12k</span>
             
            </div>

            <div className='dislike' onClick={()=>setUnLike(!unlike) && like?setLike(false):setLike(false)}>
                {
                    unlike?<i class="fa-solid fa-thumbs-down"></i>: <i class="fa-regular fa-thumbs-down"></i>
                }
                
             
            </div>
            </div>
            <div className="subcribe-2">
               <i class="fa-solid fa-share"></i>
                <span>share</span>
            </div>
            <div className="subcribe-2">
                <i class="fa-solid fa-arrow-down"></i>
                <span>Download</span>
            </div>
            <div className="subcribe-2">
               <i class="fa-solid fa-scissors"></i>
                <span>Clip</span>
            </div>
            <div className="subcribe-2">
                <i class="fa-solid fa-file-circle-plus"></i>
                <span>Save</span>
            </div>
            <div className="subcribe-2">
            <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
       </div>
       <div onClick={()=>setDescription(!description)} className={description?"large-description":"small-description"}>
         <span className='descrip-span'>{value.views} k views {value.time} year ago</span>
         <p className='descrip-p'>What is Lorem Ipsum?
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
       </div>
       {/* comment */}
       <div className="comment">
        <div className="comment-title">
            <div className='title'>
                <span>197</span>
                <span>Comments</span>
            </div>
            <div className='title-sort'>
               <i class="fa-solid fa-arrow-down-wide-short"></i>
               <span>sorts</span>
            </div>
        </div>
         <div className="comment-input">
            <div className="comment-image">
              <img src={tom} alt="" />
            </div>
            <div className="comment-text">
                <div className="input-box">
                    <input type="text" placeholder='Add a comment' />
                </div>
                  <div className="comment-button">
                    <button className='cencel-button'>Cencel</button>
                    <button className='comment-button'>Comment</button>
                  </div>
            </div>
         </div>

         {/* all comment */}
         <div className="all-comment">
            {commentData.map((item)=>(
                <Comment key={item.id} item={item}/>
            ))}
         </div>
       </div>
    </div>
  )
}

export default PlayVideo