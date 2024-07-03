import React, { useState } from 'react'
import "./Navbar.css"
import menu from "../../assets/menu.png";
import youtube from "../../assets/youtube.png";
import search from "../../assets/search.png";
import voice from "../../assets/record.png";
import upload from "../../assets/upload.png";
import notification from "../../assets/notification.png";
import tom from  "../../assets/tom.png"
import {Link} from "react-router-dom"
import Sidebar from '../Sidebar/Sidebar';
const Navbar = ({setSidebar,sidebar}) => {
  // const [Menu,setMenu] = useState(false);
  console.log(sidebar)
 const user =true;
  return (
    <nav className='nav-container'>
        <div className='nav-left'>
          <div className='menu'>
            {/* <img src={menu} alt=""  onClick={()=>setMenu(!Menu)} className='menu-img'/> */}
            {/* {
              Menu?<Sidebar/>:""
            } */}
             <img src={menu} alt=""  onClick={()=>setSidebar(!sidebar)} className='menu-img'/>

          </div>
           <div className='youtube'>
             <Link to="/"> <img src={youtube} alt="" /></Link>
           </div>
        </div>
        <div className="nav-middle">
          <div className="nav-middle-left">
            <input type="text"  placeholder='Search'/>
            <button><img src={search} alt="" /></button>
          </div>
          <div className='nav-middle-right'>
            <img src={voice} alt="" />
          </div>
        </div>
        <div className="nav-right">
          <div className='upload'>
            <img src={upload} alt="" />
          </div>
          <div className='notification'>
            <img src={notification} alt="" />
            <div className='child'>
              <span>0+</span>

            </div>

          </div>

          <div className='login'>
            {user?<>
              <img src={tom} alt="" />
            
            </>:
            <>
            <span className='signin'>SignIn</span>
            
            
            </>
            
            }
          </div>
        </div>

    </nav>
  )
}

export default Navbar