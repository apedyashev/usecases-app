import React from 'react';
import {IndexLink, Link} from 'react-router';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'injectTapEventPlugin';
import styles from './PageLayout.scss';

export const PageLayout = ({children}) => {
  injectTapEventPlugin();

  return (
    <MuiThemeProvider>
      <div className="container text-center">
        <h1>React Redux Starter Kit</h1>
        <IndexLink to="/" activeClassName="page-layout__nav-item--active">Usecases</IndexLink>
        {' · '}
        <Link to="/add" activeClassName="page-layout__nav-item--active">Add</Link>
        <div className={styles.viewport}>
          {children}
        </div>
      </div>
    </MuiThemeProvider>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
