import { Component } from 'react';

import classes from './Form.module.css';

export default class Form extends Component {
  render() {
    return (
      <form {...this.props} className={classes.form}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={classes.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            id="number"
            name="number"
            className={classes.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <button className={classes.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
