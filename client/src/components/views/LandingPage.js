import React from 'react'
import CardList from '../resuableComponents/CardList'
import { Col, Row, CardTitle, CardText } from 'reactstrap'

const LandingPage = () => {
    return (
        <div className='mt-5 mb-5'>
            <div style={{ height: '20px' }}></div>
            <div className='mt-5 mb-5 shadow p-4'>
                <CardTitle tag="h2"> Become A Blood Donor! Save A Life Today!!</CardTitle>
                <CardText>
                    Blood is a body fluid in humans and other animals that delivers necessary substances such as nutrients and oxygen to the cells and transports metabolic waste products away from those same cells. In vertebrates, it is composed of blood cells suspended in blood plasma.
                </CardText>
            </div>

            <Row>
                <Col xs="9">
                    <CardList />
                </Col>
                <Col>.col</Col>

            </Row>

        </div >
    )
}

export default LandingPage
