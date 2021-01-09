import React from 'react'
import Search from './../Search/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faMale, faFemale} from '@fortawesome/free-solid-svg-icons';

const Index = ()=> {
    return (
        <div className="innercontainer">
            <h4>Hello,<strong>Emerald</strong></h4>
            <p>Welcome to your dashboard, kindly sort through the user base</p>
            <Search />
            <h6>Show Users</h6>   
            <ul className="socialicon">
                <li>
                <a href="users" className="users1 social">
                    <FontAwesomeIcon icon={faUsers} size="3x" />
                </a>     
                </li>
                <li>
                <a href="users" className="users2 social">
                    <FontAwesomeIcon icon={faMale} size="3x" />
                </a> 
                </li>
                <li>
                <a href="users" className="users3 social">
                    <FontAwesomeIcon icon={faFemale} size="3x" />
                </a> 
                </li>  
            </ul>
            <div className="label">
                <span className="all">All Users</span>
                <span className="male">Male Users</span>
                <span className="female">Female Users</span>
            </div>         
        </div>
    )
}

export default Index
