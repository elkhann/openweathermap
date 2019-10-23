import React, { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../css/owfont-master/css/owfont-regular.css';

const City = ({ city, index, fetchData }) => {
  const { cityName, country } = city;

  useEffect(() => {
    if (cityName) {
      fetchData(cityName, country, index);
    }
  }, [cityName, country, index, fetchData]);

  let dayData,
    day,
    weatherId,
    weatherDecription,
    temp = '';

  if (city.weatherData.cod) {
    dayData = city.weatherData.list[0];
    day = moment.unix(dayData.dt).format('D MMMM');
    weatherId = dayData.weather[0].id;
    weatherDecription = dayData.weather[0].description;
    temp = Math.round(dayData.main.temp);
  }

  moment.locale('ru');

  const useStyles = makeStyles(theme => ({
    city: {
      color: '#fff',
      height: '100px',
      margin: '14px'
    },
    cityName: {
      fontSize: '20px'
    },
    date: {
      fontSize: '16px',
      textAlign: 'center',
      lineHeight: 1.2
    },
    description: {
      fontSize: '16px',
      textAlign: 'center',
      lineHeight: 1.2
    },
    deg: {
      fontSize: '28px',
      textAlign: 'center',
      lineHeight: 1.2
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      {dayData && (
        <Grid
          item
          xs={12}
          container
          direction='row'
          justify='center'
          alignItems='center'
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
            {cityName}
          </Grid>
          <Grid
            item
            xs={5}
            container
            justify='center'
            alignItems='center'
            className={classes.date}
          >
            {day}
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
              <i className={`owf owf-${weatherId} owf-2x`} />
            </Grid>
            <Grid item container justify='center' alignItems='center'>
              {weatherDecription}
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
            {temp}&deg;
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default City;
