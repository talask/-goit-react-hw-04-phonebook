import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Div } from './Common/App.styled'

const KEY_CONTACTS = 'contacts';

export const App = () => {
  
  const [ contacts, setContacts] = useState([
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]);
    const [ filter, setFilter] = useState('');
  

  useEffect(() => {
    const contactsLS = localStorage.getItem(KEY_CONTACTS);
    if(contactsLS !== null){
      const contacts = JSON.parse(contactsLS);
      setContacts(contacts);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem(KEY_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);
  
  function handleChange(evt) {
    
    const { value } = evt.target;
    setFilter(value);
    
  }

  const handleContactsChange = (obj) => {
   
    const {name: nameUser} = obj;
    obj.id = nanoid();
    if(contacts.some(({name}) => name.includes(nameUser))) {
      alert(`${nameUser} is already in contact`);
    }else {
      setContacts([...contacts, obj]);
    }
    
  };

  const handleContactsDelete = (id) => {
    
    const newContacts = [...contacts].filter(({id: idUser}) => idUser !== id);
    setContacts(newContacts);
  }

  function handleFilter(value) {
   // setFilter(value);
    if (filter) {
      return contacts.filter(({ name }) => {
        return name.toLowerCase().includes(value.toLowerCase());
      });
     
    }
    return contacts;

  }

  //console.log(handleFilter(filter));

  return (
      <Div>
        <h1>Phonebook</h1>
        <ContactForm contactsChange={handleContactsChange} />
        <h2>Contacts</h2>
        <Filter filter={filter} filterChange={handleChange}/>

        <Contacts contacts={handleFilter(filter)} fnDelete={handleContactsDelete}/>
      
      </Div>
      
    )
  
};


     