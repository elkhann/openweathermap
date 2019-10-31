import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../css/owfont-master/css/owfont-regular.css';

const WeatherDay = ({ date, time, iconId, description, temp }) => {
  const useStyles = makeStyles(theme => ({
    list: {
      color: '#fff',
      height: '100%',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      container
      direction='row'
      justify='center'
      alignItems='center'
      spacing={2}
      className={classes.list}
    >
      <Grid item xs={3} container justify='center' alignItems='center'>
        {date}
      </Grid>
      <Grid item xs={3} container justify='center' alignItems='center'>
        {time}
      </Grid>
      <Grid
        item
        xs={3}
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item container justify='center' alignItems='center'>
          <i className={`owf owf-${iconId} owf-2x`} />
        </Grid>
        <Grid item container justify='center' alignItems='center'>
          {description}
        </Grid>
      </Grid>
      <Grid item xs={3} container justify='center' alignItems='center'>
        {temp}&deg;
      </Grid>
    </Grid>
  );
};

export default WeatherDay;
