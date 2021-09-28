import React, { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '9040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '3944-323523', id: 2 },
    { name: 'Dan Abramov', number: '1243-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '3923-423122', id: 4 }
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
      number: newNumber,
      id: persons.length + 1
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
      return p;
    }
  }); 

  return (
    <div className="container bg-info pt-3 mt-3 rounded">
      <h2 className="bg-dark text-info p-2">Phonebook</h2>
      <Filter handler={filterHandler} val={newSearch} />

      <h3 className="mt-2">Add a new</h3>
      <PersonForm handler={submitHandler} subHandler={changeHandler} name={newName} number={newNumber} />
      
      <h3>Numbers</h3>
      <Persons persons={filteredList} />
    </div>
  )
}

export default App