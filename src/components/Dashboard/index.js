import React from 'react';
import 'materialize-css';
import {Row, Col} from 'react-materialize';
import Leftcontainer from './../Leftcontainer/index';
import Rightcontainer from './../Rightcontainer/index';

const Index = ()=> {
    return (
        <div>
            <Row>
                <Col className="leftlayer white-text" s={12} m={6} > 
                    {/* <div className="info-details">
                       <p className="greet">Hello,<span className="name">Emerald</span></p> 
                    </div> */}
                    <Leftcontainer />
                </Col>
                <Col className="rightlayer white-text" s={12} m={6} > 
                    <Rightcontainer />
                </Col>
            </Row> 
        </div>
    )
}

export default Index
