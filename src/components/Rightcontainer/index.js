import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const Index = ()=> {

    const[allusers, setAllusers] = useState([]);
    const userApi = "https://randomuser.me/api/?results=5"

    useEffect(()=>{
        const fetchApi = async () => {
            const data = await fetch(userApi);
            const response = await data.json();
            console.log("allusers", response);
            const responseArray = response.results;
            console.log("responseArray", responseArray);
           setAllusers(responseArray); 
        }

        fetchApi()
    }, [])

    console.log("allusers", allusers);
    return (
        <div className="display-box">
           <p>Filter By</p> 
           <div>
               <span>
               <form method="get">
                    <input oninput="triggercross(this.value)" type="text" placeholder="Find in list" id="search" name="search"
                        class="search" className="browser-default"  />
                    <button onclick="close1()" id="closeid" type="reset" class="close">
                    <FontAwesomeIcon icon={faTimes} size="1x" />
                        <p id="demo"></p>
                    </button>
                </form>
               </span>
               <span>
               <select className="browser-default" type="text" name="defaultlocation" placeholder="country"></select> 
               </span>
               <span></span>
           </div>
           {/* {allusers.map((alluser)=>{
               alluser.
           })} */}
        </div>
    )
}

export default Index