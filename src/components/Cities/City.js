import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../css/owfont-master/css/owfont-regular.css';

const City = ({ city }) => {
  const useStyles = makeStyles(theme => ({
    link: {
      textDecoration: 'none'
    },
    city: {
      color: '#fff',
      height: '100%',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    cityName: {
      fontSize: '16px',
      textAlign: 'center'
    },
    date: {
      fontSize: '16px',
      textAlign: 'center'
    },
    description: {
      fontSize: '16px',
      textAlign: 'center'
    },
    deg: {
      fontSize: '28px',
      textAlign: 'center'
    }
  }));

  const classes = useStyles();

  return (
    <Link to={`/weather/${city.city}`} className={classes.link}>
      <Grid
        item
        xs={12}
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={2}
        className={classes.city}
      >
        <Grid
          item
          xs={7}
          container
          justify='center'
          alignItems='center'
          className={classes.cityName}
        >
          {`${city.city}, ${city.country}`}
        </Grid>
        <Grid
          item
          xs={5}
          container
          justify='center'
          alignItems='center'
          className={classes.date}
        >
          {city.dayWeather.date}
        </Grid>
        <Grid
          item
          xs={7}
          container
          direction='column'
          justify='center'
          alignItems='center'
          className={classes.description}
        >
          <Grid item container justify='center' alignItems='center'>
            <i className={`owf owf-${city.dayWeather.iconId} owf-2x`} />
          </Grid>
          <Grid item container justify='center' alignItems='center'>
            {city.dayWeather.description}
          </Grid>
        </Grid>
        <Grid
          item
          xs={5}
          container
          justify='center'
          alignItems='center'
          className={classes.deg}
        >
          {city.dayWeather.temp}&deg;
        </Grid>
      </Grid>
    </Link>
  );
};

export default City;
