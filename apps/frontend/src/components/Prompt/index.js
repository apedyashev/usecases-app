import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.scss';

const Prompt = ({children, title, subtitle}) => (
  <div className={styles.centeredPrompt}>
    <div className={styles.centeredPrompt__item} />
    <h2 className={cn(styles.centeredPrompt__item, styles.centeredPromptLabel)}>
      {title}
    </h2>
    <div
      className={cn(styles.centeredPrompt__item, styles.centeredPromptDetails)}
    >
      {subtitle}
    </div>
    <div className={styles.centeredPrompt__item}>{children}</div>
  </div>
);

Prompt.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default Prompt;
