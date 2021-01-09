import React from 'react';
import 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';


const Index = ()=> {
    return (
        <div>
            <div class="searchbox">
                <form method="get">
                <FontAwesomeIcon size="1x" className="" icon={faSearch}/>
                    <input oninput="triggercross(this.value)" type="text" placeholder="Find a user" id="search" name="search"
                        class="search" className="browser-default"  />
                    <button onclick="close1()" id="closeid" type="reset" class="close">
                    <FontAwesomeIcon icon={faTimes} size="1x" />
                        <p id="demo"></p>
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Index

