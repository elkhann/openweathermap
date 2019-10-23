import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../css/owfont-master/css/owfont-regular.css';

const WeatherListDay = () => {
  moment.locale('ru');
  const day = moment.unix(dayData.dt).format('D MMMM');
  const time = moment.unix(dayData.dt).format('HH:mm');
  const weatherId = dayData.weather[0].id;
  const weatherDecription = dayData.weather[0].description;
  const temp = Math.round(dayData.main.temp);

  const useStyles = makeStyles(theme => ({
    day: {
      color: '#fff'
    },
    dayItem: {
      margin: 12
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        item
        xs={4}
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.day}
      >
        <Grid item xs className={classes.dayItem}>
          {day}
        </Grid>
        <Grid item xs className={classes.dayItem}>
          {time}
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.day}
      >
        <Grid item>
          <i className={`owf owf-${weatherId} owf-2x`} />
        </Grid>
        <Grid item>{weatherDecription}</Grid>
      </Grid>
      <Grid
        item
        xs={4}
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.day}
      >
        <Grid item>{temp}&deg;</Grid>
      </Grid>
    </React.Fragment>
  );
};

export default WeatherListDay;
