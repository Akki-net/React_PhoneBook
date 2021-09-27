import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas'}
  ]);
  const [ newName, setNewName ] = useState('');

  const changeHandler = (Event) => {
    let name = Event.target.value;
    setNewName(name);
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
      return;
    }

    const newPerson = {
      name: newName
    };
    setPersons(persons.concat(newPerson));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandler}>
        <div>
          name: <input onChange={changeHandler} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => <p key={p.name}> {p.name} </p>)}
    </div>
  )
}

export default App