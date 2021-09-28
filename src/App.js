import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '9645-859868'    
  }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newSearch, setNewSearch ] = useState('');

  const changeHandler = (Event) => {
    let nam = Event.target.name;
    let val = Event.target.value;
    if(nam === "pName"){
      setNewName(val);
    }
    else{
      setNewNumber(val);
    }
  
  };

  const submitHandler = Event => {
    Event.preventDefault();

    try{
      persons.forEach(p => {
        if(newName === p.name){
          alert(`${newName} is already to phonebook`);
          throw "exit";
        }
      });
    }
    catch(err){
      setNewName('');
      setNewNumber('');
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber
    };
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');    
  };

  const filterHandler = Event => {
    setNewSearch(Event.target.value);
  };

  const filteredList = newSearch === '' ? persons : persons.filter(p => {
    let word = new RegExp(newSearch, 'i');
    if(p.name.search(word) !== -1){
      console.log("hrlo");
      return p;
    }
  }); 

  return (
    <div>
      <h2>Phonebook</h2>
      <input onChange={filterHandler} value={newSearch} />
      <form onSubmit={submitHandler}>
        <h2>add a new</h2>
        <div>
          name: <input onChange={changeHandler} placeholder="XYZ " name="pName" value={newName} />
        </div>
        <div>
          number: <input  pattern="[0-9]{4}-[0-9]{6}" placeholder="1234-101010" maxLength="11" name="pNumber" value={newNumber} onChange={changeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredList.map(p => <p key={p.name}> {p.name}   {p.number} </p>)}
    </div>
  )
}

export default App