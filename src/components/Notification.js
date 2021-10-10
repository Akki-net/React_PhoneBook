import React from 'react';

const Notification = ({error, nml}) => {
    if(nml !== ''){
     return  <p style={{color: "green", padding: "5px", border: "2px solid green"}}> {nml} </p> 
    }
    
    if(error !== ''){
     return <p style={{color: "red", padding: "5px", border: "2px solid red"}}> {error} </p>
    }

    return <> </>
    
};

export default Notification