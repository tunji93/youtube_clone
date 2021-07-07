import axios from "axios"
import { searchVideosEndpoint, baseUrl } from "../../Api"
import {CATEGORIES_VIDEOS_SUCCESS, CATEGORIES_VIDEOS_FAIL, CATEGORIES_VIDEOS_REQUEST} from '../ActoinTypes'





const fetchVideosCategories = (keyword) => async (dispatch, getState) => {
    const nextPagetoken = getState().homeVideos.nextPageToken
    try {
        dispatch({
            type: CATEGORIES_VIDEOS_REQUEST
        })
        const {data:{items, nextPageToken}} = await axios(`${baseUrl}${searchVideosEndpoint}PageToken=${nextPagetoken}&q=${keyword}&key=${process.env.REACT_APP_API_KEY}`)
        

        

         dispatch({
            type: CATEGORIES_VIDEOS_SUCCESS,
            payLoad: {
                videos: items,
                nextPageToken: nextPageToken,
                category: keyword
            }
        })
        
        
        
    } catch (error) {
        dispatch({
            type: CATEGORIES_VIDEOS_FAIL,
            payLoad: error.message
                
            
        })
    }
}

export default fetchVideosCategories