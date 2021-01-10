import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Posts from './../Posts/index';
import Pagination from './../Pagination/index';


const Index = ()=> {

    const[allusers, setAllusers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3)
    

    const userApi = "https://randomuser.me/api/?results=48"   

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

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allusers.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    console.log("allusers", allusers);
    return (
        <div className="display-box">
           <p>Filter By</p> 
           <div>
               <form method="get" className="searchbox2">
                    <FontAwesomeIcon size="1x" />
                    <input  type="text" placeholder="Find in list" id="search2" name="search"
                        className="search browser-default"  />
                </form>
                <span>
                    <select className="browser-default select-place" type="text" name="defaultlocation" placeholder="country"></select> 
               </span> 
               <span></span>
           </div>
            <Posts allusers={currentPosts} />
            <Pagination postsPerPage={postsPerPage} totalPosts={allusers.length} paginate={paginate}/>
           <div>
               
           </div>
            
        </div>
    )
}

export default Index