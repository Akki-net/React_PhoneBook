import react from "react";

const Persons = ({persons}) => {
    return(
        <div className="bg-light p-2">
            { persons.map(p => 
            <p key={p.id}> {p.name}   {p.number} </p>)}
        </div>
    )
};

export default Persons