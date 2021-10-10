import React from "react";

const PersonForm = (props) => {

    const { handler,subHandler,name,number} = props;

    return(
        <form onSubmit={handler} method="post">
        <div className="form-group">
          <label for="name">name:</label> 
          <input id="name" className="form-control" onChange={subHandler} placeholder="XYZ " name="pName" value={name} />
        </div>
        <div>
            <label for="number">number:</label>
          <input id="number" className="form-control" placeholder="9623500000" maxLength="10" name="pNumber" value={number} onChange={subHandler} />
        </div>
        <div className="mt-2">
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
        </form>
    )
};

export default PersonForm;