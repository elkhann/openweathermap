import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  return (
    <div>
      <Container maxWidth='sm'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='textPrimary'
          gutterBottom
        >
          Open Weather
        </Typography>
      </Container>
    </div>
  );
};

export default Header;
