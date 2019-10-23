import React from 'react';
import Cities from './Cities';
// import WeatherList from './WeatherList';
// import WeatherSearch from './WeatherSearch';

import { connect } from 'react-redux';
import { itemsFetchData } from '../store/actions';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Weather = ({ cities, city, fetchData }) => {
  // useEffect(() => {
  //   if (city !== undefined) {
  //     fetchData(city);
  //   }
  // }, [city, fetchData]);

  const useStyles = makeStyles(theme => ({
    grid: {
      background: '#2053b3',
      padding: 16
    }
  }));
  const classes = useStyles();

  return (
    <Container maxWidth='sm'>
      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.grid}
      >
        <React.Fragment>
          <Cities />
        </React.Fragment>
      </Grid>

      {/* <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.grid}
      >
        {city ? (
					<React.Fragment>
					 <WeatherSearch /> 
            <WeatherList />
          </React.Fragment>
        ) : (
          ''
        )}
      </Grid> */}
    </Container>
  );
};

const mapStateToProps = ({ cities }) => {
  return { cities: cities };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: city => dispatch(itemsFetchData(city))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
