import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import fetchTrendingVideos from '../Redux/Actions/Trending_action'
import {Container, Row, Col} from 'react-bootstrap'
import CategoriesBar from '../components/CategoriesBar'
import VideoCard from '../components/VideoCard'



const Homepage = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        
        dispatch(fetchTrendingVideos())
        
    }, [dispatch])

    const{videos} = useSelector(state=> state.homeVideos)
    const display = videos.map((video) => <Col  lg={3} md={4} key={video.id} ><VideoCard video={video}/></Col>) 
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {display}
            </Row>  
        </Container>
    )
}

export default Homepage
