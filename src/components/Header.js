import React from 'react'
import { FaBars } from 'react-icons/fa';
import { MdNotifications,MdApps} from "react-icons/md"
import { AiOutlineSearch  } from "react-icons/ai"
import '../Styles/_Header.scss'


const Header = ({handleSidebar}) => {

    
    return (
        <div className="header">
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
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="avatar"/>
            </div>
        </div>
        
        
    )
}

export default Header



























