import { Component } from 'react';

import { nanoid } from 'nanoid';

import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = e => {
    e.preventDefault();
    const formEl = e.target;
    const formData = new FormData(formEl);
    const contactData = Object.fromEntries(formData.entries());
    contactData.id = nanoid();
    this.setState(prev => ({
      ...prev,
      contacts: [...prev.contacts, contactData],
    }));

    formEl.reset();
  };

  handleName =e => {
    console.log(e);
  }

  handleFilter = query => {
    const contacts = {...this.state.contacts};
    const searchedContact = contacts.filter(contact => contact.name.includes(query))
    console.log(searchedContact);
  }

  render() {
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
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={this.state.contacts} handleFilter={this.handleFilter} />
        </Section>
      </div>
    );
  }
}
export { App };
