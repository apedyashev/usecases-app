// libs
import React, {PropTypes} from 'react';
// components
import RaisedButton from 'material-ui/RaisedButton';


class InfiniteList extends React.Component {
  static propTypes = {};

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
