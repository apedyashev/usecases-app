// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import {Helmet} from 'react-helmet';
import InfiniteList from 'components/InfiniteList';
import UsecaseCard from '../UsecaseCard';
// other
import styles from './index.scss';

class UsecasesList extends React.Component {
  static propTypes = {
    usecasesApiStatus: PropTypes.shape({
      nextPage: PropTypes.number.isRequired,
      hasNextPage: PropTypes.bool.isRequired,
    }).isRequired,
    loadUsecases: PropTypes.func.isRequired,
    usecases: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.loadUsecases();
  }

  loadMoreUsecases = () => {
    const {usecasesApiStatus: {nextPage}} = this.props;
    this.props.loadUsecases(nextPage);
  }

  rowRenderer = (usecase) => {
    return (
      <div
        className={styles.item}
        key={usecase.id}
      >
        <UsecaseCard usecase={usecase} />
      </div>
    );
  }

  render() {
    const {usecases, usecasesApiStatus: {hasNextPage, pending, loaded}} = this.props;
    return (<div>
      <Helmet>
        <title>Usecases</title>
      </Helmet>
      <InfiniteList
        items={usecases}
        listClassName={styles.container}
        hasNextPage={hasNextPage}
        pending={pending}
        loaded={loaded}
        itemRenderer={this.rowRenderer}
        loadMoreItems={this.loadMoreUsecases}
      />
    </div>);
  }
}

export default UsecasesList;
