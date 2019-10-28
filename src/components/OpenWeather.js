import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkCity } from '../store/actions';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Cities from './Cities/Cities';
import CityAdd from './Cities/CityAdd';

import WeatherInCity from './CityWeather/WeatherList';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const OpenWeather = ({ addCity, cities }) => {
  useEffect(() => {
    addCity('Lviv', cities);
    addCity('Yalta', cities);
  }, []);

  const useStyles = makeStyles(theme => ({
    container: {
      background: '#2053b3'
    }
  }));
  const classes = useStyles();

  return (
    <Container maxWidth='sm' className={classes.container}>
      <Switch>
        <Route exact path='/'>
          <CityAdd />
          <Cities />
        </Route>
        <Route path='/weather/:id'>
          <WeatherInCity />
        </Route>
      </Switch>
    </Container>
  );
};

const mapStateToProps = ({ cities }) => {
  return { cities };
};

const mapDispatchToProps = dispatch => {
  return {
    addCity: (city, cities) => {
      dispatch(checkCity(city, cities));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenWeather);
