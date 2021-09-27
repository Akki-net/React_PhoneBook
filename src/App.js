import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', id: 1}
  ]);
  const [ newName, setNewName ] = useState('');

  const changeHandler = (Event) => {
    let name = Event.target.value;
    setNewName(name);
  };

  const submitHandler = Event => {
    Event.preventDefault();
    const newPerson = {
      name: newName,
      id: persons.length + 1
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
      {persons.map(p => <p key={p.id}> {p.name} </p>)}
    </div>
  )
}

export default App