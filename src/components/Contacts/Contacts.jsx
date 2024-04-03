import { Component } from 'react';

import Filter from 'components/Filter/Filter';

import classes from './Contacts.module.css';

export default class Contacts extends Component {
  render() {
    const { contacts, handleChange, handleDelete } = this.props;
    return (
      <div className={classes.list}>
        <Filter
          handleChange={handleChange}
          isFilterEnabled={!!contacts.length}
        />
        {!!contacts.length && <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={classes.item}>
              <div><span>{name}</span>:&nbsp;
              <span>{number}</span></div>
              <button className={classes.button} onClick={() => handleDelete(id)}>Delete</button>
            </li>
          ))}
        </ul>}
      </div>
    );
  }
}
