import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../store/actions';
import moment from 'moment';
import 'moment/locale/ru';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../css/owfont-master/css/owfont-regular.css';

const WeatherListDay = ({ city, index, fetchData }) => {
  const { cityName, country, weatherData } = city;

  useEffect(() => {
    if (cityName !== undefined) {
      fetchData(cityName, country, index);
    }
  }, [cityName, country, index, fetchData]);

  console.log(city);
  if (city.weatherData !== {}) {
    console.log(weatherData);
  }

  console.log(city.weatherData);

  moment.locale('ru');
  // const day = moment.unix(dayData.dt).format('D MMMM');
  // const time = moment.unix(dayData.dt).format('HH:mm');
  // const weatherId = dayData.weather[0].id;
  // const weatherDecription = dayData.weather[0].description;
  // const temp = Math.round(dayData.main.temp);

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
          99 october
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
            <i className={`owf owf-${600} owf-2x`} />
          </Grid>
          <Grid item container justify='center' alignItems='center'>
            Звездочно
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
          0&deg;
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (city, country, index) =>
      dispatch(itemsFetchData(city, country, index))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(WeatherListDay);
