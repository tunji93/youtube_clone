import React from 'react'
import { FaBars } from 'react-icons/fa';
import { MdNotifications,MdApps } from "react-icons/md"
import { AiOutlineSearch  } from "react-icons/ai"
import '../Styles/_Header.scss'


const Header = ({handleSidebar}) => {

    
    return (
        <div className="border border-dark header">
            <FaBars onClick={ ()=>{handleSidebar()}} className="header__menu" size={26}/>
            <img src="https://pngimg.com/uploads/youtube/youtube_PNG102354.png" alt="youtube logo" className="header__logo"/>
            <form>
                <input type="text" placeholder="Search" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://pngimg.com/uploads/youtube/youtube_PNG102354.png" alt="avatar"/>
            </div>
        </div>
        
        
    )
}

export default Header

























/* import React from 'react'
import '../styles/header.css'
import MenuIcon from '@material-ui/icons/Menu'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Avatar from '@material-ui/core/Avatar';


const Header = () => {
    return (
        <div className= "header">
            <div className="header__left">
                <MenuIcon />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt = "logo" className="header__logo" />
            </div>
            <div className="header__center">
                <div className="header__input">
                    <input type="text" />
                    <button>
                        <SearchIcon className="header__search"/>
                    </button>
                </div>
                <MicIcon />
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__icons"  className="header__icons"/>
                <AppsIcon  className="header__icons"/>
                <NotificationsIcon  className="header__icons"/>
                <Avatar className="header__icons">W</Avatar>
            </div>
        </div>
    )
}

export default Header */

