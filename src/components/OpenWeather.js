import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Cities from '../containers/Cities/Cities';
import CityAdd from '../containers/Cities/CityAdd';
import WeatherList from '../containers/CityWeather/WeatherList';
import NoMatch from '../components/NoMatch';

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
        <Route path='/weather'>
          <Redirect to='/' />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </Container>
  );
};

export default OpenWeather;
