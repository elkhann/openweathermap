import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../css/owfont-master/css/owfont-regular.css';

const City = ({ city }) => {
  let dayData,
    day,
    weatherId,
    weatherDecription,
    temp = '';

  if (city.cod === '200') {
    dayData = city.list[0];
    day = moment.unix(dayData.dt).format('D MMMM');
    weatherId = dayData.weather[0].id;
    weatherDecription = dayData.weather[0].description;
    temp = Math.round(dayData.main.temp);
  }

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
    <div>
      {dayData && (
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
        </Link>
      )}
    </div>
  );
};

export default City;
