import React, { useState } from 'react'
import "./Comment.css"

const Comment = ({item}) => {
    const [commentLike,setCommentLike] = useState(false);
    const [commentDisLike,setCommenDistLike] = useState(false);
    const [commentReply,setCommentReply] = useState(false);
  return (
    <div className='comment-container'>
        <div className="comment-left">
            <img src={item.img} alt="" />
        </div>
        <div className="comment-right">
            <div className="comment-right-1">
                <span className='commnet-span-1'>{item.gmail}</span>
                <span className='commnet-span-2'>{item.time} year ago</span>
            </div>
            <div className="comment-right-2">
                <p>{item.comment}</p>
            </div>
            <div className="comment-right-3">
                <div className="comment-right-3-1">
                    <div className="comment-like" onClick={()=>setCommentLike(!commentLike) && commentDisLike?setCommenDistLike(false):setCommenDistLike(false)}>
                        {
                        commentLike?<i class="fa-solid fa-thumbs-up"></i>: <i class="fa-regular fa-thumbs-up"></i>
                        }
                        <span>12k</span>
                    </div>
                    <div className="comment-dislike" onClick={()=>setCommenDistLike(!commentDisLike) && commentLike?setCommentLike(false):setCommentLike(false)}>
                        {
                        commentDisLike?<i class="fa-solid fa-thumbs-down"></i>: <i class="fa-regular fa-thumbs-down"></i>
                        }
                    </div>
                    <div className="comment-reply" onClick={()=>setCommentReply(!commentReply)}>
                        <span>Reply</span>
                    </div>
                    
                </div>
                <div className={commentReply?"comment-right-3-2":"comment-right-3-2-display"}>
                  <div className="comment-right-3-2-input">
                    <input type="text" placeholder='Add a reply' />
                  </div>
                  <div className="comment-right-3-2-button">
                    <button className='comment-cencel-button' onClick={()=>setCommentReply(false)}>Cancel</button>
                    <button className='comment-repy-button'>Reply</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comment