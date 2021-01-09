import React from 'react';
import {Row, Col} from 'react-materialize';
import Leftcontainer from './../Leftcontainer/index';
import Rightcontainer from './../Rightcontainer/index';

const Index = ()=> {
    return (
        <div>
            <Row>
                <Col className="leftlayer white-text" s={12} m={6} > 
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
