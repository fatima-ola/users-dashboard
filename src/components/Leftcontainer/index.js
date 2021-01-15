import React from 'react'
import Search from './../Search/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faMale, faFemale} from '@fortawesome/free-solid-svg-icons';


const Index = (props)=> {
    const {handleAlluser, handleMale, handleFemale} = props

   return (
        <div className="leftcontent">
            <h4>Hello,<strong>Emerald</strong></h4>
            <p>Welcome to your dashboard, kindly sort through the user base</p>
            <Search />
            <h6>Show Users</h6>   
            <ul className="socialicon">
                <li>
                <button className="users1 social"  onClick={handleAlluser}>
                    <FontAwesomeIcon icon={faUsers} size="3x"/>
                </button>     
                </li>
                <li>
                <button className="users2 social" onClick={handleMale}>
                    <FontAwesomeIcon icon={faMale} size="3x" />
                </button> 
                </li>
                <li>
                <button className="users3 social" onClick={handleFemale}>
                    <FontAwesomeIcon icon={faFemale} size="3x" />
                </button> 
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
