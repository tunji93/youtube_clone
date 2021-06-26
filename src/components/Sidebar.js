import React from 'react'
import '../Styles/_Sidebar.scss'
import {
    MdSubscriptions,
    MdThumbUp,
    MdExitToApp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
}
from
"react-icons/md"

const Sidebar = ({display}) => {
    return (
        <nav className={display? "sidebar open" : "sidebar"}>
            <li>
                <MdHome size={23}/>
                <span>Home</span>
            </li>
            <li>
                <MdSubscriptions size={23}/>
                <span>Subscription</span>
            </li>
            <li>
                <MdThumbUp size={23}/>
                <span>Liked Videos</span>
            </li>
            <li>
                <MdHistory size={23}/>
                <span>History</span>
            </li>
            
            <li>
                <MdLibraryBooks size={23}/>
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23}/>
                <span>i don't know</span>
            </li>
            <hr />
            <li>
                <MdExitToApp size={23}/>
                <span>Log out</span>
            </li>
            <hr />
        </nav>
    )
}

export default Sidebar

















/*import React from 'react'
import SideBarRows from './SideBarRows'
import '../styles/sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Sidebar = ()=> {
    return (
        <div className="sidebar">
            <SideBarRows title={"Home"} Icons={HomeIcon} selected={true}/>
            <SideBarRows title={"Trending"} Icons={WhatshotIcon}/>
            <SideBarRows title={"Subscription"} Icons={SubscriptionsIcon}/>
            <hr/>
            <SideBarRows title={"Library"} Icons={VideoLibraryIcon}/>
            <SideBarRows title={"History"} Icons={HistoryIcon}/>
            <SideBarRows title={"Tour Videos"} Icons={OndemandVideoIcon}/>
            <SideBarRows title={"Watch later"} Icons={WatchLaterIcon}/>
            <SideBarRows title={"Liked Videos"} Icons={ThumbUpAltIcon}/>
            <SideBarRows title={"Show more"} Icons={ExpandMoreIcon}/>
            <hr/>
            

        </div>
    )
}

export default Sidebar */