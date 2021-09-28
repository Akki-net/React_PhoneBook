import react from "react";

const PersonForm = (props) => {

    const { handler,subHandler,name,number} = props;

    return(
        <form onSubmit={handler} >
        <div className="form-group">
          <label for="name">name:</label> 
          <input id="name" className="form-control" onChange={subHandler} placeholder="XYZ " name="pName" value={name} />
        </div>
        <div>
            <label for="number">number:</label>
          <input id="number" className="form-control" pattern="[0-9]{4}-[0-9]{6}" placeholder="1234-101010" maxLength="11" name="pNumber" value={number} onChange={subHandler} />
        </div>
        <div className="mt-2">
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
        </form>
    )
};

export default PersonForm;