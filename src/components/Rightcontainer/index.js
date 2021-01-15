import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleSwitch from './../ToggleSwitch/index';

const Index = (props)=> {
const { search, location, handleLocation, handleSearch, allusers}= props;

    return ( 
           <div className="searcher">
                <div className="find">
                    <form className="searchbox2">
                        <FontAwesomeIcon size="1x" />
                        <input  type="text" placeholder="Find in list" id="search2" name="search" value={search}
                            className="search browser-default" onKeyPress={handleSearch} />
                    </form>
                </div>
                <div className="country">
                    
                    <select className="browser-default" type="text" name="location" value={location} onChange={handleLocation} >
                    {allusers.map((alluser)=>(
                        
                        <option key={alluser.login.uuid.value} value={alluser.location.country}>{alluser.location.country}</option>
                    ))}
                    </select> 

                </div>
                <div className="togglesw">
                <ToggleSwitch />
                </div>

           </div>
            
    )
}

export default Index