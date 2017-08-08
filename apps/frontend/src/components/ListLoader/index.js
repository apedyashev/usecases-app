// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import Loader from 'components/Loader';
// other
import styles from './index.scss';

export default function InfiniteTableLoader({children, style}) {
  return (
    <div className={styles.root} style={style}>
      <Loader size={30} className={styles.spinner} />
      <span>{children}</span>
    </div>
  );
}
InfiniteTableLoader.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object
};
