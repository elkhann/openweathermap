import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addCity } from '../store/actions';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

const CityAdd = ({ city, addCity }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (city !== undefined) {
      setValue(city);
    }
  }, [city]);

  const useStyles = makeStyles(theme => ({
    root: {
      color: '#fff',
      background: '#4876c2',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      color: '#fff',
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10,
      color: '#fff'
    },
    divider: {
      height: 28,
      margin: 4
    }
  }));

  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      container
      justify='center'
      alignItems='center'
      className={classes.grid}
    >
      <form onSubmit={e => addCity(e, value)}>
        {/* <InputBase
            className={classes.input}
            defaultValue={city}
            type='text'
            onChange={e => setValue(e.target.value)}
            inputProps={{ 'aria-label': 'naked' }}
          />

        </Grid>
        <Grid item xs={1}>
          <Button onClick={e => onSetCity(e, value)} className={classes.button}>
            Go
          </Button> */}
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder='Enter City'
            inputProps={{ 'aria-label': 'add city' }}
            onChange={e => setValue(e.target.value)}
          />

          <Divider className={classes.divider} orientation='vertical' />
          <IconButton
            onClick={e => addCity(e, value)}
            color='primary'
            className={classes.iconButton}
            aria-label='directions'
          >
            Add
          </IconButton>
        </Paper>
      </form>
    </Grid>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addCity: (e, value) => {
      console.log(value);
      e.preventDefault();
      dispatch(addCity(value));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CityAdd);
