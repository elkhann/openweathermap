import React from 'react';
import { connect } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Error from '../../components/Cities/Error';

const ErrorContainer = ({ error }) => {
  const notify = error => toast(error);
  if (error) {
    notify(error);
  }
  return (
    // <React.Fragment>
    //   {error ? <Error error={error} /> : ''}
    // </React.Fragment>
    <ToastContainer />
  );
};

const mapStateToProps = ({ fetch }) => {
  return { error: fetch.hasError };
};

export default connect(mapStateToProps)(ErrorContainer);
