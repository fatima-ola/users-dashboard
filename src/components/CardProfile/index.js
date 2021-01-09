import React from 'react';
import {Row, Col, CardPanel} from 'react-materialize'

const Index =(props)=> {
    const {picture, profiledetails, alt} = props
    return (
        <div>
            <Row>
                <Col m={12} s={12}>
                    <CardPanel className="teal">
                        <Row>
                            <Col m={3} s={12}><img src={picture} alt={alt} /></Col>
                            <Col m={9} s={12}>{profiledetails}</Col>
                        </Row>
                    </CardPanel>
                </Col>
            </Row>
        </div>
    )
}

export default Index
