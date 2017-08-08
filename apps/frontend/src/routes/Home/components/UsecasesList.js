// libs
import React, {PropTypes} from 'react';
// components
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import InfiniteList from 'components/InfiniteList';

class UsecasesList extends React.Component {
  static propTypes = {};

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
