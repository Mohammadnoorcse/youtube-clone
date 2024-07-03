import React from 'react'
import "./SmallSidebar.css"
import {Link} from "react-router-dom"
import Home from "../../assets/home.png"
import short from "../../assets/game-boy.png"
import subscriprion from "../../assets/subscriprion.png"
import you from "../../assets/save.png"
const SmallSidebar = () => {
  return (
    <div className='smallsidebar'>
      <div className='smallsidebar-child'>
        <Link to="/">
          <img src={Home} alt="" />
           <span>Home</span>
        
        </Link>
      </div>
      <div className='smallsidebar-child'>
        <Link to="/">
          <img src={short} alt="" />
           <span>Shorts</span>
        
        </Link>
      </div>
      <div className='smallsidebar-child'>
        <Link to="/">
          <img src={subscriprion} alt="" />
           <span>Subscriptions</span>
        
        </Link>
      </div>
      <div className='smallsidebar-child'>
        <Link to="/">
          <img src={you} alt="" />
           <span>You</span>
        
        </Link>
      </div>
    </div>
  )
}

export default SmallSidebar