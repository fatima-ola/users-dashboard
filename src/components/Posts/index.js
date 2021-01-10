import React from 'react'
import CardProfile from './../CardProfile/index';

const Index = (props) => {
    const {allusers} = props
    
    return (
        <div>
            {allusers.map((alluser)=>(
               <div>
                   <CardProfile key={alluser.id.value} picture={alluser.picture.thumbnail} alt="profilepics" firstname={alluser.name.first} lastname={alluser.name.last} strnumber={alluser.location.street.number} strname={alluser.location.street.name} state={alluser.location.state}  country={alluser.location.country}  email={alluser.email} phoneno={alluser.cell}/>
                
               </div>
           ))}
        </div>
    );
  };
export default Index
