import React from 'react';
import Cities from './Cities';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Weather = () => {
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
    </Container>
  );
};

export default Weather;
