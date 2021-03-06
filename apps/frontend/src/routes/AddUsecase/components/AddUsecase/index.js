// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import {Helmet} from 'react-helmet';
import AddUsecaseForm from '../AddUsecaseForm';
// other
import styles from './index.scss';

class AddUsecase extends React.Component {
  static propTypes = {
    createUsecase: PropTypes.func.isRequired,
  };

  componentDidMount() {
  }

  showResults = (values) => {
    return this.props.createUsecase(values);
  }

  render() {
    return (<div className={styles.root}>
      <Helmet>
        <title>Create Usecase</title>
      </Helmet>

      <AddUsecaseForm onSubmit={this.showResults} />
    </div>);
  }
}

export default AddUsecase;
