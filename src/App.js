import { useState, useEffect } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  // Варияант2
  // const [contacts, setContacts] = useState(()=>
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );

  const [filter, setFilter] = useState('');

  const formSubmitHandler = (data) => {
    setContacts((s) => [data, ...s]);
  };

  const handleRemove = (id) => {
    setContacts((s) => s.filter((contact) => contact.id !== id));
  };

  const changeFilter = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <div className="App">
      <AddContact onSubmit={formSubmitHandler} />

      <ContactList
        contacts={contacts}
        contactsFiltered={filteredContacts}
        onRemove={handleRemove}
        filter={filter}
        onChange={changeFilter}
      />
    </div>
  );
}

export default App;
