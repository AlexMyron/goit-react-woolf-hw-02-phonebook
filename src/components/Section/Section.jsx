import { Component } from 'react';

import classes from './Section.module.css';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={classes.container}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}
