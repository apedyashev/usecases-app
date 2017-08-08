// libs
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// components
import RaisedButton from 'material-ui/RaisedButton';
// other
import styles from './index.scss';

export default function CardOverlay({children, onHide, visible}) {
  return (
    <div className={cn(styles.root, {[styles.hidden]: !visible})}>
      {children}
      <div className={styles.actionBar}>
        <RaisedButton label="Close" secondary onClick={(onHide)} style={{float: 'right'}} />
      </div>
    </div>
  );
}
CardOverlay.propTypes = {
  children: PropTypes.any,
  onHide: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};
