// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import RaisedButton from 'material-ui/RaisedButton';
// other
import styles from './index.scss';

export default function LoadMoreButton({label, onTouchTap}) {
  return (
    <div className={styles.root}>
      <RaisedButton
        label={label}
        onTouchTap={onTouchTap}
      />
    </div>
  );
}
LoadMoreButton.propTypes = {
  label: PropTypes.string.isRequired,
  onTouchTap: PropTypes.func.isRequired,
};
