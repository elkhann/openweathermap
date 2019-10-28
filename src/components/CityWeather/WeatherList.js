import React from 'react';

import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import WeatherDay from './WeatherDay';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import '../../css/owfont-master/css/owfont-regular.css';

const WeatherList = ({ cities }) => {
  const history = useHistory();
  let { id } = useParams();

  const city = cities.find(city => {
    return city.city === id;
  });

  const useStyles = makeStyles(theme => ({
    cardAddGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2)
    },
    root: {
      color: '#fff',
      background: '#4876c2',
      display: 'flex',
      alignItems: 'center'
    },
    header: {
      color: '#fff',
      marginLeft: theme.spacing(1),
      flex: 1,
      fontSize: '16px'
    },
    iconButton: {
      padding: 10,
      color: '#fff'
    },
    divider: {
      height: 28,
      margin: 4
    },
    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#4876c2'
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.cardAddGrid}>
        <Grid item xs={12}>
          <Card>
            <Paper className={classes.root}>
              <h2 className={classes.header}>{city.city}</h2>
              <Divider className={classes.divider} orientation='vertical' />
              <IconButton
                onClick={() => history.push('/')}
                color='primary'
                className={classes.iconButton}
                aria-label='directions'
              >
                Back
              </IconButton>
            </Paper>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.cardGrid}>
        {city.list.map(list => {
          return (
            <Grid item xs={12} key={list.dt}>
              <Card className={classes.card}>
                <WeatherDay list={list} />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = ({ cities }) => {
  return { cities };
};

export default connect(mapStateToProps)(WeatherList);
