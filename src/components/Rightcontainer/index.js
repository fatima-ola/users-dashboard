import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Posts from './../Posts/index';
import Pagination from './../Pagination/index';
import {Row, Col} from 'react-materialize';
import ToggleSwitch from './../ToggleSwitch/index';


const Index = ()=> {

    const[allusers, setAllusers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3)
    

    const userApi = "https://randomuser.me/api/?results=48"   

    useEffect(()=>{
        const fetchApi = async () => {
            const data = await fetch(userApi);
            const response = await data.json();
            const responseArray = response.results;
            setAllusers(responseArray); 
           
        }

        fetchApi()
    }, [])

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allusers.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <div className="display-box">
           <p>Filter By</p> 
           <div>
               <Row>  
                <Col m={5} s={12}> 
                    <form method="get" className="searchbox2">
                        <FontAwesomeIcon size="1x" />
                        <input  type="text" placeholder="Find in list" id="search2" name="search"
                            className="search browser-default"  />
                    </form>
                </Col>     
                <Col m={5} s={12}>
                    <select className="browser-default select-place" type="text" name="defaultlocation" placeholder="country"></select> 
                </Col>
                <Col m={2} s={12}>
                    <ToggleSwitch />
                </Col>
            </Row>

           </div>
            <Posts allusers={currentPosts} />
            <Pagination postsPerPage={postsPerPage} totalPosts={allusers.length} paginate={paginate}/>
           <div>
               
           </div>
            
        </div>
    )
}

export default Index