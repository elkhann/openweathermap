import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Error from '../../components/Cities/Error';

const ErrorContainer = ({ error }) => {
  return <Fragment>{error ? <Error error={error} /> : ''}</Fragment>;
};

const mapStateToProps = ({ fetch }) => {
  return { error: fetch.hasError };
};

export default connect(mapStateToProps)(ErrorContainer);
