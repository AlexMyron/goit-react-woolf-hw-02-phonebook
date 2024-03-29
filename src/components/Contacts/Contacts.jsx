import { Component } from 'react';

import Filter from 'components/Filter/Filter';

export default class Contacts extends Component {
  render() {
    const { contacts, handleFilter } = this.props;
    return (
      <>
        <Filter handleFilter={handleFilter} />
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <span>{name}</span>:&nbsp;
              <span>{number}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
