import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import popularVideosReducer from '../Redux/Reducers/PopularVideosReducer'


const rootReducer = combineReducers({
    homeVideos: popularVideosReducer
})



const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store