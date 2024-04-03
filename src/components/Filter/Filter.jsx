import { Component } from 'react';

import classes from './Filter.module.css';

export default class Filter extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <>
        <h3 className={classes.title}>Find Contacts by name</h3>
        <input
          type="text"
          name="filter"
          className={classes.input}
          onChange={handleChange}
        />
      </>
    );
  }
}
