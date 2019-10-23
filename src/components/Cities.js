import React from 'react';
import { connect } from 'react-redux';
import City from './City';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Weather = ({ cities }) => {
  const useStyles = makeStyles(theme => ({
    grid: {
      marginTop: '0'
    },
    gridIttem: {
      background: '#4876c2',
      margin: 20
    }
  }));

  const classes = useStyles();

  return (
    <Grid
      container
      justify='space-between'
      alignItems='center'
      className={classes.grid}
    >
      {cities
        ? cities.map((city, index) => {
            return (
              <Grid
                key={city.cityName}
                item
                xs={5}
                container
                justify='center'
                alignItems='center'
                className={classes.gridIttem}
              >
                <City city={city} index={index} />
              </Grid>
            );
          })
        : ''}
    </Grid>
  );
};

const mapStateToProps = ({ cities }) => {
  return { cities: cities };
};

export default connect(mapStateToProps)(Weather);