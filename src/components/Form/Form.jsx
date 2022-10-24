import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from '../Form/Form.module.css';

class Form extends Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  state = {
    id: nanoid(),
    name: '',
    number: '',
  };

  handleInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit({ ...this.state, id: nanoid() });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor={this.nameInputId} className={css.label__name}>
          Name
          <input
            className={css.input__name}
            onChange={this.handleInput}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.nameInputId}
            required
          />
        </label>
        <label htmlFor={this.numberInputId} className={css.label__number}>
          Phone
          <input
            className={css.input__number}
            onChange={this.handleInput}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.numberInputId}
            required
          />
        </label>

        <button
          type="submit"
          disabled={!this.state.name}
          className={css.btn__add}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
