import React from 'react'

const Search = () => {
    return (
        <div>
            Search
        </div>
    )
}

export default Search






/* import React,{useState, useEffect} from 'react'
import '../styles/search.css'
import SearchCard from './SearchCard'
const Search = () => {
    const[videos, setVideos] = useState([])
    
    //GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]




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
    <SearchCard image={video.snippet.thumbnails.medium.url}id={video.id} title={video.snippet.title}key={video.id} views={video.statistics.viewCount}
    timestamp={video.snippet.publishedAt} channel={video.snippet.channelTitle} channelId={video.snippet.channelId}/>)
    )
    useEffect( ()=> {
       document.title = "Searchpage"
       getData()
    }, [])

    return (
        <div className="recomended">
           <h2>Search Result</h2>
           <div className="recomended_">
            {videoList}
           </div>
           
           
           
        </div>
    )
}

export default Search */