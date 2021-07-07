import {POPULAR_VIDEOS_SUCCESS, POPULAR_VIDEOS_FAIL,POPULAR_VIDEOS_REQUEST,CATEGORIES_VIDEOS_SUCCESS, CATEGORIES_VIDEOS_FAIL, CATEGORIES_VIDEOS_REQUEST} from '../ActoinTypes'



const reducer = (prevState= {
    videos: [],
    loading: false,
    nextPageToken: null,
    error: null,
    activeCategory: 'All'
}, action) => {
   const {type,payLoad} = action

    switch(type) {
        case POPULAR_VIDEOS_REQUEST:
            return {
                ...prevState,
                loading: true
            }
        
        case POPULAR_VIDEOS_SUCCESS:
                return {
                    ...prevState,
                    videos: payLoad.videos,
                    loading: false,
                    nextPageToken:payLoad.nextPageToken,
                    activeCategory: payLoad.category

                     
            }

        case POPULAR_VIDEOS_FAIL:
                return {
                    ...prevState,
                    error: payLoad,
                    loading: false,
                     
            }

            case CATEGORIES_VIDEOS_REQUEST:
                return {
                    ...prevState,
                    loading: true
                }
            
            case CATEGORIES_VIDEOS_SUCCESS:
                    return {
                        ...prevState,
                        videos: payLoad.videos,
                        loading: false,
                        nextPageToken:payLoad.nextPageToken,
                        activeCategory: payLoad.category
    
                         
                }
    
            case CATEGORIES_VIDEOS_FAIL:
                    return {
                        ...prevState,
                        error: payLoad,
                        loading: false,
                         
                }
        default: 
            return prevState
    }
}

export default reducer