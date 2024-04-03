import { Component } from 'react';

import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  addContact = e => {
    e.preventDefault();
    const formEl = e.target;
    const { name, number, contacts } = this.state;

    if (!name || !number) return;

    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      toast(`Contact "${name}" already exists`);
      formEl.reset();
      return;
    }

    this.setState(prev => ({
      ...prev,
      contacts: [...prev.contacts, { name, number, id: nanoid() }],
      name: '',
      number: '',
    }));

    formEl.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;

    if (!value.trim()) {
      this.setState({ [name]: '' });
      return;
    }

    this.setState({ [name]: value.trim() });
  };

  handleFilter = () => {
    const contacts = [...this.state.contacts];
    const { filter: query } = this.state;
    if (!contacts.length) return;

    const searchedContact = contacts.filter(({ name }) =>
      name.toLowerCase().startsWith(query.toLowerCase())
    );
    return searchedContact;
  };

  handleDelete = id => {
    this.setState(prev => {
      const contacts = [...prev.contacts];
      const idx = contacts.findIndex(contact => contact.id === id);
      contacts.splice(idx, 1);
      return { ...prev, contacts };
    });
  };

  render() {
    const filteredContacts = this.handleFilter();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <Form addContact={this.addContact} handleChange={this.handleChange} />
        </Section>
        <Section title="Contacts">
          <Contacts
            contacts={filteredContacts || []}
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
            isFilterDisabled={!this.state.contacts.length}
          />
        </Section>
        <ToastContainer />
      </div>
    );
  }
}
export { App };
