import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CategoriesBar from '../components/CategoriesBar'
import VideoCard from '../components/VideoCard'


const Homepage = () => {

    const display = [...new Array(20)].map(()=> <Col lg={3} md={4}><VideoCard /></Col>) 
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
