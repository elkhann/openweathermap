import React from 'react';
import { connect } from 'react-redux';
import WeatherListDay from './WeatherListDay';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const WeatherList = ({ weather }) => {
  const useStyles = makeStyles(theme => ({
    grid: {
      backgroundColor: '#4876c2',
      marginBottom: 16
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      {weather.cod === '200'
        ? weather.list.map((dayData, index) => {
            return (
              <Grid
                key={index}
                item
                xs={10}
                container
                justify='center'
                alignItems='center'
                className={classes.grid}
              >
                <WeatherListDay dayData={dayData} />
              </Grid>
            );
          })
        : ''}
    </React.Fragment>
  );
};

const mapStateToProps = () => {};

export default WeatherList;
