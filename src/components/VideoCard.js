import React, {useState,useEffect} from 'react'
import TimeAgo from 'react-timeago'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'
import '../styles/videocard.css'

const VideoCard = ({image,title,channel, views, timestamp, channelId}) => {

    const[url, setUrl] = useState('')

    
    //https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=1&key=[YOUR_API_KEY] HTTP/1.1

    


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

   function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K';  
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; 
    }else if(num < 900){
        return num; 
    }
}
useEffect(()=> {
    getData()
}, [])
const views_ = numFormatter(views)
    const formatText = (text) => {
        if (text.length > 45) {
            const str = text.slice(0,45)
            return `${str}...`
        }
        return text
    }
    const title_ = formatText(title)
    
    return (
        <Link to="/view:{id}">
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

export default VideoCard
