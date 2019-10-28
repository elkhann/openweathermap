import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import City from './City';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const Weather = ({ cities }) => {
  const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#4876c2'
    },
    empty: {
      color: '#fff',
      background: '#4876c2',
      height: '100%',
      padding: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.cardGrid}>
      {cities.length ? (
        cities.map(city => {
          return (
            <Grid item xs={6} key={city.city}>
              <Card className={classes.card}>
                <City city={city} />
              </Card>
            </Grid>
          );
        })
      ) : (
        <Grid item xs={12}>
          <Card className={classes.grid}>
            <Grid className={classes.empty}>Enter city to search</Grid>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = ({ cities }, history) => {
  return { cities, history };
};

export default withRouter(connect(mapStateToProps)(Weather));
