import React from 'react';
import {Row, Col, CardPanel} from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Index =(props)=> {
    const {picture, firstname,lastname,strnumber, strname, state, country,email,phoneno, alt} = props
    return (  
        <Row>
            <Col m={12} s={12}>
                <CardPanel className="profile-card ">
                    <Row>
                        <Col m={2} s={12} className="picture"><img src={picture} alt={alt} /></Col>
                        <Col m={10} s={12}>
                            <p><b>{firstname}<span className="username">{lastname}</span></b></p>
                            <p>
                                <span>{strnumber}</span>
                                <span>{strname},</span>
                                <span>{state},</span>
                                <span>{country}</span>
                            </p>
                            <p className="contact-details">
                                <span className="themail">{email}</span>
                                <span className="thenumb">{phoneno}</span>
                                <span className="pointer "> <FontAwesomeIcon icon={faArrowRight} size="1x" /></span>
                            </p>
                        </Col>
                    </Row>
                </CardPanel>
            </Col>
        </Row>
    )
}

export default Index
