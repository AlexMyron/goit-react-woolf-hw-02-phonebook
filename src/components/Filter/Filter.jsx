import { Component } from 'react';

export default class Filter extends Component {
  render() {
    
    return (
      <>
        <h3>Find Contacts by name</h3>
        <input type="text" name="filter" />
      </>
    );
  }
}
