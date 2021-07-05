import {baseUrl, mostPopularEndPoint} from '../../Api.js'
import axios from 'axios'
import {POPULAR_VIDEOS_SUCCESS, POPULAR_VIDEOS_FAIL, POPULAR_VIDEOS_REQUEST} from '../ActoinTypes'


const fetchTrendingVideos = () => async dispatch => {
    
    try {
        dispatch({
            type: POPULAR_VIDEOS_REQUEST
        })
        const {data:{items, nextPageToken}} = await axios(`${baseUrl}${mostPopularEndPoint}${process.env.REACT_APP_API_KEY}`)
        

        

         dispatch({
            type: POPULAR_VIDEOS_SUCCESS,
            payLoad: {
                videos: items,
                nextPageToken: nextPageToken
            }
        })
        
        
        
    } catch (error) {
        dispatch({
            type: POPULAR_VIDEOS_FAIL,
            payLoad: error.message
                
            
        })
    }
}

export default fetchTrendingVideos