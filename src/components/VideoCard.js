import React, { useEffect,useState } from 'react'
import  '../Styles/_Videocard.scss'
import { AiFillEye  } from "react-icons/ai"
import axios from 'axios'
import moment from 'moment'
import numeral from 'numeral'
import { baseUrl, channelEndPoint, videoDetailsEndPoint } from '../Api'

const VideoCard = ({video}) => {

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelImage, setChannelImage] = useState(null)

    const seconds = moment.duration(duration).asSeconds()
    const duration_ = moment.utc(seconds*1000).format('ms:ss')

    const views_ = numeral(views).format('0.a')
    
    
    
    const{
        id,
        snippet:{
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: {medium}
        }
    } = video

    const videoId = id?.videoId || id

    useEffect(()=> {
        const fetchItems = async() => {
            const {data:{items}} = await axios(`${baseUrl}${videoDetailsEndPoint}id=${videoId}&key=${process.env.REACT_APP_API_KEY_1}`)
            console.log(items)
            const[data] = items
            
            const{contentDetails:{duration}, statistics:{viewCount}} = data
            setDuration(duration)
            setViews(viewCount)
            
        }

        fetchItems()    
    }, [videoId])
    
    
    useEffect(()=> {
        const fetchChannel = async() => {
            const {data:{items}}= await axios(`${baseUrl}${channelEndPoint}id=${channelId}&key=${process.env.REACT_APP_API_KEY_1}`)
            const[data] = items
            const{snippet:{thumbnails:{default:{url}}}} = data
            setChannelImage(url)
            
            
        }

        fetchChannel()    
    }, [channelId])
    
    
    
    
    return (
        <div className="video">
            <div className="video__top">
                <img src={medium.url} alt="thumbnail" />
                <span>{duration_}</span>
            </div>
            <div className="video__title">
                {title}
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye/> {views_} views •
                </span>
                <span>
                    {moment(publishedAt).fromNow()}
                </span>
            </div>
            <div className="video__channel">
                <img src={channelImage} alt="channel" />
                <p>{channelTitle}</p>
            </div>

            
        </div>
    )
}

export default VideoCard

















































/*import React, {useState,useEffect} from 'react'
import TimeAgo from 'react-timeago'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'
import '../styles/videocard.css'
import {numFormatter, viewsFormatter} from './functions/functions'

const VideoCard = ({image,title,channel, views, timestamp, channelId}) => {

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

export default VideoCard */




