import React from "react";
import personServices from '../services/persons';

const Persons = ({persons, setHandler}) => {
    const deleteHandler = (id) => {
        const result = window.confirm("Do You want to delete it?")
        if(result === true){
            personServices.del(id)
            .then(
               setHandler(persons.filter(p => p.id !== id))
            )
        } 
    };
 
    return(
        <div className="bg-light p-2">
            { persons.map(p => (
                <div className="d-flex justify-content-between align-content-center mb-2" key={p.id}> 
                   <div> {p.name} {p.number} </div>
                   <button className="btn btn-danger btn-sm" onClick={() => deleteHandler(p.id)}>Delete</button>
                </div>
            )
          ) }
        </div>
    )
};

export default Persons