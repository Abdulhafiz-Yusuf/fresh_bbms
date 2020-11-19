import React from 'react'
import CardList from '../components/resuable components/CardList'
import { Col, Row, Card, CardTitle, CardText } from 'reactstrap'

const LandingPage = () => {
    return (
        <div>
            <div className='mt-5 mb-5'>
                <CardTitle tag="h3">Special Title Treatment</CardTitle>
                <CardText>
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.
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
