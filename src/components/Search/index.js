import React from 'react';
import 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';


const Index = ()=> {
    return (
        <div>
            <div className="searchbox">
                <form method="get">
                <FontAwesomeIcon size="1x" className="" icon={faSearch}/>
                    <input  type="text" placeholder="Find a user" id="search1" name="search"
                        className="search browser-default"  />
                    <button  id="closeid1" type="reset" className="close">
                    <FontAwesomeIcon icon={faTimes} size="1x" />
                        <p id="demo"></p>
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Index

