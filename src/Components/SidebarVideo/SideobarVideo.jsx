import React, { useState } from 'react'
import "./SidebarVideo.css"
import { Link,useNavigate,useParams } from 'react-router-dom';

const SideobarVideo = ({value}) => {
    const navigate = useNavigate()
    const handleClick = () => {
      navigate(`/video/${value.category}/${value.id}`);
    };

  return (
    <div className="sidebarvideo" onClick={handleClick}>
      <div className="sidebarvideo-left">
        <img src={value.subImage} alt="" />
      </div>
      <div className="sidebarvideo-right">
        <div className="sidebarvideo-right-1">
          <span>{value.title}</span>
        </div>
        <div className="sidebarvideo-right-2">
          <span>{value.subName}</span>
        </div>
        <div className="sidebarvideo-right-3">
          <span>{value.views}M Views</span>
          <span>{value.time} year ago</span>
        </div>
      </div>
    </div>
  );
}

export default SideobarVideo