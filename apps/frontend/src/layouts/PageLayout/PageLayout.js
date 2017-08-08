import React from 'react';
import {IndexLink, Link} from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'injectTapEventPlugin';
import Snackbar from 'material-ui/Snackbar';
import TopBar from 'components/TopBar';
import {destroyMessage} from 'routes/Home/modules/message';
import styles from './PageLayout.scss';

export const PageLayout = ({children, message, destroyMessage}) => {
  injectTapEventPlugin();

  return (
    <MuiThemeProvider>
      <div className={styles.root}>
        <TopBar />
        <div className={styles.viewport}>
          {children}
        </div>
        <Snackbar
          open={!!message}
          message={message || ''}
          autoHideDuration={4000}
          onRequestClose={destroyMessage}
        />
      </div>
    </MuiThemeProvider>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
  destroyMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  destroyMessage,
};

const mapStateToProps = (state) => ({
  message: state.message && state.message.text,
});
export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);
