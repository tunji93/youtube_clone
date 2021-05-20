import React from 'react'
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

export default Header

