import React from 'react';

import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ru';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../css/owfont-master/css/owfont-regular.css';

const WeatherDay = ({ list }) => {
  console.log(list);

  moment.locale('ru');
  const day = moment.unix(list.dt).format('D MMMM');
  const time = moment.unix(list.dt).format('HH:mm');
  const weatherId = list.weather[0].id;
  const weatherDecription = list.weather[0].description;
  const temp = Math.round(list.main.temp);

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
    <div>
      {list && (
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
            {day}
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
              <i className={`owf owf-${weatherId} owf-2x`} />
            </Grid>
            <Grid item container justify='center' alignItems='center'>
              {weatherDecription}
            </Grid>
          </Grid>
          <Grid item xs={3} container justify='center' alignItems='center'>
            {temp}&deg;
          </Grid>
        </Grid>
      )}
    </div>
  );
};

const mapStateToProps = ({ cities }) => {
  return { cities };
};

export default connect(mapStateToProps)(WeatherDay);
