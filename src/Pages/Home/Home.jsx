import React from 'react'
import "./Home.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import SmallSidebar from '../../Components/SmallSidebar/SmallSidebar'
import {data} from "../../Components/data.js"
import VideoCard from '../../Components/VideoCard/VideoCard.jsx'

const Home = ({sidebar}) => {
  console.log(data[0].id)
  return (
    <>
    {/* <Sidebar/> */}
    <div className="home">
      <div className="sidebar-content">
        {sidebar?<Sidebar/>:<SmallSidebar/>}

      </div>
      <div className="video-content">
        {data.map((value) => (
            <VideoCard key={value.id} value={value}/>
        ))}
        
      </div>
    </div>
    
    
    </>
  )
}

export default Home