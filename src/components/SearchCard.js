import React, {useState,useEffect} from 'react'
import TimeAgo from 'react-timeago'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'
import '../styles/searchcard.css'
import {numFormatter, viewsFormatter} from './functions/functions'

const SearchCard = ({image,title,channel, views, timestamp, channelId}) => {

    const[url, setUrl] = useState('')

    
    const title_ = viewsFormatter(title)   
    const views_ = numFormatter(views)

    


const getData= async() => {
    try {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&maxResults=1&key=${process.env.REACT_APP_API_KEY_1}`).then(response => response.json())
        const{items} = data
        console.log(typeof items[0].snippet.thumbnails.default.url)
        

        setUrl(items[0].snippet.thumbnails.default.url)
        
    
        
           
       } catch (error) {
           //alert(error)
       }
}

   
useEffect(()=> {
    getData()
}, [])

    
    
    return (
        <Link to="/view:{id}" >
            <div className="videocard">
                <img  width="252.8" height="140" src={image} alt={image}/>
                <div className="videocard_info">
                    <div className="avatar">
                        <Avatar
                        className="videocard_avatar"
                        src={url}
                        alt={channel}
                        />

                    </div>
                    <div className="video_text">
                        <h5>{title_}</h5>
                        <p>{channel}</p>
                        <p>{views_} views * <TimeAgo date={timestamp}/></p>

                    </div>


                </div>
                
            </div>
        </Link>
    )
}

export default SearchCard