import react from "react";

const PersonForm = (props) => {

    const { handler,subHandler,name,number} = props;

    return(
        <form onSubmit={handler} >
        <div>
          name: <input onChange={subHandler} placeholder="XYZ " name="pName" value={name} />
        </div>
        <div>
          number: <input  pattern="[0-9]{4}-[0-9]{6}" placeholder="1234-101010" maxLength="11" name="pNumber" value={number} onChange={subHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        </form>
    )
};

export default PersonForm;