import React, { useEffect } from 'react'
import "./Sidebar.css"
import home from "../../assets/home.png";
import arrow from "../../assets/arrow.png"
import youtube from "../../assets/10001.svg"
import youtubeStdio from "../../assets/10002.svg"
import youtubeMusic from "../../assets/10003.svg"
import youtubeKids from "../../assets/10004.svg"
import al from "../../assets/10005.jpg";
import sumit from "../../assets/10006.jpg";
import lama from "../../assets/10007.jpg";
import dr from "../../assets/10008.jpg";
import great from "../../assets/10009.jpg";
import sm from "../../assets/10010.jpg";
import game from "../../assets/game.png"
import cup from "../../assets/Cup.png"
import trending from "../../assets/Trending.png"
import music from "../../assets/music.png";
import feedback from "../../assets/feedback.png";
import setting from "../../assets/settings.png";
import help from "../../assets/help.png";
import history from "../../assets/history.png";
import channel from "../../assets/video-document.png"
import playlist from "../../assets/playlist.png"
import timer from "../../assets/timer.png"
import video from "../../assets/videos.png"
import like from "../../assets/like.png"
import short from "../../assets/game-boy.png"
import subscriprion from "../../assets/subscriprion.png"
import {Link} from "react-router-dom";

const Sidebar = () => {
  

  return (
    <div className='sidebar'>
        <div className="sidebar-1">
            <div className="sidebar-child-1 active">
               <img src={home} alt="" />
               
               <Link to="/">Home</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={short} alt="" />
               <Link to="/">Shorts</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={subscriprion} alt="" />
               <Link to="/">Subscriptions</Link>
            </div>
        </div>
        {/* second  */}
        <div className="sidebar-1">
            <div className="sidebar-child-header">
            
               <Link to="/">You</Link>
                <img src={arrow} alt="" />
            </div>
            <div className="sidebar-child-1">
               <img src={channel} alt="" />
               <Link to="/">Your Channel</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={timer} alt="" />
               <Link to="/">History</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={playlist} alt="" />
               <Link to="/">Playlists</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={video} alt="" />
               <Link to="/">Your Videos</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={timer} alt="" />
               <Link to="/">Watch later</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={like} alt="" />
               <Link to="/">Liked Videos</Link>
            </div>
        </div>
        {/* third  */}
        <div className="sidebar-1">
            <div className="sidebar-child-header">
            
               <Link to="/">Subscriptions</Link>
                {/* <img src={arrow} alt="" /> */}
            </div>
            <div className="sidebar-child-1">
               <img src={al} alt="" />
               <Link to="/">Al Jazeera English</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={sm} alt="" />
               <Link to="/">Simplilearn</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={lama} alt="" />
               <Link to="/">Lama</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={sumit} alt="" />
               <Link to="/">Learn with sumit</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={dr} alt="" />
               <Link to="/">Dr Shawon</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={great} alt="" />
               <Link to="/">GreatStack</Link>
            </div>
        </div>
        {/* Four  */}
        <div className="sidebar-1">
            <div className="sidebar-child-header">
            
               <Link to="/">Explore</Link>
                {/* <img src={arrow} alt="" /> */}
            </div>
            <div className="sidebar-child-1">
               <img src={trending} alt="" />
               <Link to="/">Trending</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={music} alt="" />
               <Link to="/">Music</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={game} alt="" />
               <Link to="/">Gaming</Link>
            </div>
            
            <div className="sidebar-child-1">
               <img src={cup} alt="" />
               <Link to="/">Sports</Link>
            </div>
        
        </div>
        {/* Five  */}
        <div className="sidebar-1">
            <div className="sidebar-child-header">
            
               <Link to="/">More from YouTube</Link>
                {/* <img src={arrow} alt="" /> */}
            </div>
            <div className="sidebar-child-1">
               <img src={youtube} alt="" />
               <Link to="/">Youtube Premium</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={youtubeStdio} alt="" />
               <Link to="/">Youtube Studio</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={youtubeMusic} alt="" />
               <Link to="/">Youtube Music</Link>
            </div>
            
            <div className="sidebar-child-1">
               <img src={youtubeKids} alt="" />
               <Link to="/">YouTube Kids</Link>
            </div>
        
        </div>
        {/* Six  */}
        <div className="sidebar-1">
            <div className="sidebar-child-1">
               <img src={setting} alt="" />
               <Link to="/">Setting</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={history} alt="" />
               <Link to="/">Report history</Link>
            </div>
            <div className="sidebar-child-1">
               <img src={help} alt="" />
               <Link to="/">Help</Link>
            </div>
            
            <div className="sidebar-child-1">
               <img src={feedback} alt="" />
               <Link to="/">Send feedback</Link>
            </div>
        
        </div>

    </div>
  )
}

export default Sidebar