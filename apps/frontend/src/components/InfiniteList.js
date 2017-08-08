// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import RaisedButton from 'material-ui/RaisedButton';


class InfiniteList extends React.Component {
  static propTypes = {
    hasNextPage: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    itemRenderer: PropTypes.func.isRequired,
    loadMoreItems: PropTypes.func.isRequired,
  };

  render() {
    const {items, itemRenderer, loadMoreItems, hasNextPage} = this.props;
    return (<div>
      <div>
        {items.map(itemRenderer)}
      </div>

      <div>
        <RaisedButton
          label="Load more"
          disabled={!hasNextPage}
          onTouchTap={loadMoreItems}
        />
      </div>
    </div>);
  }
}

export default InfiniteList;
