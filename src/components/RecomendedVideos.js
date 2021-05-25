import React,{useState, useEffect} from 'react'
import '../styles/recomendedvideos.css'
import VideoCard from './VideoCard.js'
const RecomendedVideos = () => {
    const[videos, setVideos] = useState([])
    
    //GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxHeight=140&maxWidth=250&regionCode=NG&key=[YOUR_API_KEY] HTTP/1.1

    //console.log(process.env.REACT_APP_API_KEY)


    const getData= async() => {
        try {
            const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxHeight=140&maxWidth=250&regionCode=NG&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json())
            const{items} = data
            
            setVideos(items)
            //console.log(items)
            
               
           } catch (error) {
               alert(error)
           }
    }

    const videoList = videos.map(video=> (
    <VideoCard image={video.snippet.thumbnails.medium.url}id={video.id} title={video.snippet.title}key={video.id} views={video.statistics.viewCount}
    timestamp={video.snippet.publishedAt} channel={video.snippet.channelTitle} channelId={video.snippet.channelId}/>)
    )
    useEffect( ()=> {
       document.title = "homepage"
       getData()
    }, [])

    return (
        <div className="recomended">
           <h2>Recommended</h2>
           <div className="recomended_">
            {videoList}
           </div>
           
           
           
        </div>
    )
}

export default RecomendedVideos
