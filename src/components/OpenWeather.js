import React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';

import Cities from '../containers/Cities/Cities';
import CityAdd from '../containers/Cities/CityAdd';
import WeatherList from '../containers/CityWeather/WeatherList';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const OpenWeather = ({ cities }) => {
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
          {cities.length > 0 ? <WeatherList /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </Container>
  );
};

export default OpenWeather;
