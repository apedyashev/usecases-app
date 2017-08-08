// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import AddUsecaseForm from '../AddUsecaseForm';
// other
import styles from './index.scss';

class UsecasesList extends React.Component {
  static propTypes = {
  };

  componentDidMount() {
  }

  showResults = (values) => {
    this.props.createUsecase(values)
  }



  render() {
    return (<div className={styles.root}>
      <AddUsecaseForm onSubmit={this.showResults} />
    </div>);
  }
}

export default UsecasesList;
