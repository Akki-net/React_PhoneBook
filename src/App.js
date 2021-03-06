import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personServices from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [ persons, setPersons ] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newSearch, setNewSearch ] = useState('');
  const [ addNew, setAddNew ] = useState('');
  const [ errMsg, setErrMsg ] = useState('');

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

  useEffect(() => {
    personServices.getAll()
    .then(returnedPersons => setPersons(returnedPersons))}, []);

  const submitHandler = Event => {
    Event.preventDefault();
  
    const newPerson = {
      name: newName,
      number: newNumber
    }; 
    
    persons.forEach(p => {
      let result = false;
      if(p.name === newName) {
        result = window.confirm(`${newName} is already added to phonebook, want to replace with new one?`);
        if(result){
          personServices.getAll().then(rList => {
            rList.forEach(l => {
              if(l.name === newName && newNumber)
                {
                  const id = l.id;
                 personServices.update(id, newPerson)
                .then(updatedItem => {
                 setPersons(persons.map(val => val.name!==newName ? val : updatedItem));
                  setAddNew(`Changed ${newName}`);  
                 setNewName('');
                   setNewNumber('');
                  }).catch(error => {
                    const msg = `Information of ${l.name} has already been removed`;
                    setErrMsg(msg);
                    setTimeout(()=> setErrMsg(null), 3000);
                    setPersons(persons.filter(p => p.id!== id));
                  });
                }
            });
          });
        }
        else{
         setNewName('');
         setNewNumber('')
        }
      }
    });

    const ack = persons.filter(p => p.name !== newName);
    if(ack){
      personServices.create(newPerson)
      .then(newObj => {
      setPersons(persons.concat(newObj));
      setAddNew(`Added ${newObj.name}`);
      setNewName('');
      setNewNumber('');
    })
    .catch(error => {
      console.log(error.response.data);
      setAddNew('');
      setErrMsg(Object.values(error.response.data));
      setTimeout(()=> setErrMsg(''), 3000);
      setNewName('');
      setNewNumber('');
    })
    }
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
    <div className="container bg-info mt-3 pt-3 rounded">
      <h2 className="bg-dark text-info p-2">Phonebook</h2>
     <Notification error={errMsg} nml={addNew} />
      <Filter handler={filterHandler} val={newSearch} />
      <h3 className="mt-2">Add a new</h3>
      <PersonForm handler={submitHandler} subHandler={changeHandler} name={newName} number={newNumber} />
      
      <h3>Numbers</h3>
      <Persons persons={filteredList} setHandler={setPersons} />
    </div>
  )
}

export default App