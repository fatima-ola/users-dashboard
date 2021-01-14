import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Posts from './../Posts/index';
// import Pagination from './../Pagination/index';
import ToggleSwitch from './../ToggleSwitch/index';


const Index = (props)=> {
const { search, location, handleLocation, handleSearch, allusers}= props;
    // const[allusers, setAllusers] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(3);
    // const [search, setSearch] = useState();
    // const [location, setLocation] = useState();
    

    // const userApi = "https://randomuser.me/api/?results=48"   

    // useEffect(()=>{
    //     const fetchApi = async () => {
    //         const data = await fetch(userApi);
    //         const response = await data.json();
    //         const responseArray = response.results;
    //         setAllusers(responseArray); 
           
    //     }

    //     fetchApi()
    // }, [])

    // const handleLocation = (e) => {

    // }

    // const handleSearch = () => {

    // }

    // //Get current posts
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = allusers.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
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
                    
                    <select className="browser-default" type="text" name="location" value={location} onChange={handleLocation} placeholder="Country" defaultValue="Country">
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