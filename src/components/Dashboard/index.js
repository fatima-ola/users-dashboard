import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-materialize';
import Leftcontainer from './../Leftcontainer/index';
import Posts from './../Posts/index';
import Pagination from './../Pagination/index';
import Rightcontainer from './../Rightcontainer/index';

const Index = ()=> {
    const[allusers, setAllusers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [search, setSearch] = useState();
    const [location, setLocation] = useState();

    const userApi = "https://randomuser.me/api/?results=48"   

    useEffect(()=>{
        const fetchApi = async () => {
            const data = await fetch(userApi);
            const response = await data.json();
            const responseArray = response.results;
            console.log(responseArray);
            
            setAllusers(responseArray); 
        }

        fetchApi()
    }, []);

    const handleLocation = (e) => {
        console.log("countries", allusers.location.country)
    }

    const handleSearch = (e) => {
        const text = e.target.value;
        console.log("text", text);
        setSearch(text);
            e.preventDefault();
        const searchArr = allusers.filter(function(obj) {
            return obj["name"]["first"].toLowerCase() === text.toLowerCase();
        });
        console.log("searchArr", searchArr);
        setAllusers(searchArr);
    }
    // For left
    const handleAlluser =(e) => {
        

    }

    const handleMale = (e) => {
        const searchMale = allusers.filter(function(obj) {
            return obj["gender"] === "male";
        });
        setAllusers(searchMale);
    }

    const handleFemale = (e) => {
        const searchFemale = allusers.filter(function(obj) {
            return obj["gender"] === "female";
        });
        setAllusers(searchFemale);
    }

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allusers.slice(indexOfFirstPost, indexOfLastPost);

     // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Row>
                <Col className="leftlayer white-text" s={12} m={6} > 
                    <Leftcontainer handleAlluser={handleAlluser}
                    handleMale={handleMale}
                    handleFemale={handleFemale} />
                </Col>
                <Col className="rightlayer white-text" s={12} m={6} > 
                <div className="display-box">
                <p>Filter By</p> 
                    <Rightcontainer search={search} handleSearch={handleSearch}
                    location={location}
                   handleLocation={handleLocation}
                   allusers={allusers}/>
                    <Posts allusers={currentPosts} />
                    <Pagination postsPerPage={postsPerPage} totalPosts={allusers.length} paginate={paginate}/>
                <div>
               
                </div>
            
                </div>
                </Col>
            </Row> 
        </div>
    )
}

export default Index
