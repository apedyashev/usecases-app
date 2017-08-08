// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import LoadMoreButton from 'components/LoadMoreButton';
import ListLoader from 'components/ListLoader';
import Prompt from 'components/Prompt';


class InfiniteList extends React.Component {
  static propTypes = {
    hasNextPage: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    itemRenderer: PropTypes.func.isRequired,
    loadMoreItems: PropTypes.func.isRequired,
    pending: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    listClassName: PropTypes.string.isRequired,
  };

  render() {
    const {items, itemRenderer, loadMoreItems, hasNextPage, pending, loaded, listClassName} = this.props;
    return (<div>
      <div className={listClassName}>
        {items.map(itemRenderer)}
      </div>

      {pending && (<ListLoader>
        Loading...
      </ListLoader>)}


      {(loaded && !items.length) && (
        <Prompt title="Oops" subtitle="The list is empty" />
      )}

      {(hasNextPage && !pending) && (
        <LoadMoreButton
          label="Load more"
          disabled={!hasNextPage}
          onTouchTap={loadMoreItems}
        />
      )}

    </div>);
  }
}

export default InfiniteList;
