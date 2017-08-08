// libs
import React from 'react';
// components
import {IndexLink, Link} from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import styles from './index.scss';

export default function TopNavAuthenticated() {
  return (<div className={styles.container}>
    <div className={styles.items}>
      <IndexLink to="/" className={styles.item} activeClassName={styles.active}>
        <MenuItem primaryText="Usecases" />
      </IndexLink>
      <Link to="/add" className={styles.item} activeClassName={styles.active}>
        <MenuItem primaryText="Add New" />
      </Link>
    </div>
  </div>);
}

TopNavAuthenticated.propTypes = {
};
