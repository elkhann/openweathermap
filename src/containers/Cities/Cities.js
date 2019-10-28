import React from 'react';
import { connect } from 'react-redux';
import Cities from '../../components/Cities/Cities';

const CitiesContainer = ({ cities }) => {
  return <Cities cities={cities} />;
};

const mapStateToProps = ({ cities }) => {
  return { cities };
};

export default connect(mapStateToProps)(CitiesContainer);
