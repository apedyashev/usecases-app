// libs
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// components
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TimelineIcon from 'material-ui/svg-icons/action/timeline';
import CardOverlay from '../CardOverlay';
import MilestonesTimeline from '../MilestonesTimeline';
// other
import baseColors from 'styles/base.js';
import styles from './index.scss';

class UsecaseCard extends React.Component {
  static propTypes = {
    usecase: PropTypes.object.isRequired,
  };
  state = {
    isOverlayShown: false,
  };

  showOverlay = () => {
    const {usecase} = this.props;
    const milestonesCount = usecase.milestones.length;
    // do not hide overlay using
    if (!milestonesCount) {
      return;
    }

    this.setState({isOverlayShown: true});
  }

  hideOverlay = (e) => {
    e.stopPropagation();
    this.setState({isOverlayShown: false});
  }

  renderSubtitle(milestonesCount) {
    if (!milestonesCount) {
      return null;
    }

    return (
      <div>
        <TimelineIcon style={{height: 15, color: baseColors.secondaryColor}} />
        <span className={styles.milestonesCount}>{milestonesCount}</span> milestones
      </div>
    );
  }

  render() {
    const {usecase} = this.props;
    const milestonesCount = usecase.milestones.length;

    return (
      <Card
        className={cn(styles.card, {[styles.clickable]: milestonesCount})}
        onClick={this.showOverlay}
      >
        <CardHeader
          title={usecase.title}
          subtitle={this.renderSubtitle(milestonesCount)}
        />
        <CardText
          dangerouslySetInnerHTML={{__html: usecase.body}}
        />
        {milestonesCount && (
          <CardOverlay visible={this.state.isOverlayShown} onHide={this.hideOverlay}>
            <MilestonesTimeline items={usecase.milestones} />
          </CardOverlay>
        )}
      </Card>
    );
  }
}

export default UsecaseCard;
