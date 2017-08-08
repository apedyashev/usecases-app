// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import Timeline from 'react-visjs-timeline';

const options = {
  width: '100%',
  height: '150px',
  stack: false,
  showMajorLabels: true,
  showCurrentTime: true,
  zoomMin: 1000000,
  type: 'range',
};

export default function MilestonesTimeline({items}) {
  return (
    <Timeline
      options={options}
      items={items}
    />
  );
}
MilestonesTimeline.propTypes = {
  items: PropTypes.array.isRequired,
};
