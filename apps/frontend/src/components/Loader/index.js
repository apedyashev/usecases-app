import React from 'react';
import base from 'styles/base.js';
import CircularProgress from 'material-ui/CircularProgress';

const Loader = (props) => (
  <CircularProgress color={base.primaryColor} {...props} />
);

export default Loader;
