import React from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };

    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`contact ${name} already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactName => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name !== contactName
      ),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normilizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('update');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.container}>
        <h1 className={css.titlePhonebook}>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter value={filter} onChange={this.changeFilter} />
        <h2 className={css.contactList}>Contacts</h2>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
