import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';

export default function Appbar() {
  return (
    <AppBar
      className='d-flex flex-start justify-content-center px-3 '
      position='static'
      color='inherit'
      style={{ height: '10vh' }}
    >
      <Typography variant='h5' noWrap>
        Josefina's Online Shop
      </Typography>
    </AppBar>
  );
}
