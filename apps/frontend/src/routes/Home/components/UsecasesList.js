// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import {Card, CardHeader, CardText} from 'material-ui/Card';
import InfiniteList from 'components/InfiniteList';

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

  rowRenderer(usecase) {
    return (
      <Card key={usecase.id}>
        <CardHeader
          title={usecase.title}
          subtitle="Subtitle"
        />
        <CardText>
          {usecase.body}
        </CardText>
      </Card>
    );
  }

  render() {
    const {usecases, usecasesApiStatus: {hasNextPage}} = this.props;
    return (<div>
      <InfiniteList
        items={usecases}
        hasNextPage={hasNextPage}
        itemRenderer={this.rowRenderer}
        loadMoreItems={this.loadMoreUsecases}
      />
    </div>);
  }
}

export default UsecasesList;
