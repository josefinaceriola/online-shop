import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ShopData from '../db';

const ShopCard = ({ title, picture, link, menu }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='my-3 col-12 col-md-6 d-flex justify-content-center align-items-center'>
      <Paper elevation={3} style={{ width: '100%', height: 'auto' }}>
        <Card style={{ width: '100%', height: 'auto' }}>
          <CardActionArea>
            <CardMedia component='img' height='160' src={picture} />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='d-flex justify-content-between align-items-center'>
            <a href={`${link}`} target='_blank'>
              <Button variant='contained' color='primary'>
                Order Now
              </Button>
            </a>
            <Button
              variant='contained'
              color='primary'
              onClick={(event) => handleMenu(event)}
            >
              View Menu
            </Button>
          </CardActions>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setOpen(false)}
            style={{}}
          >
            {menu.map((item) => {
              return <MenuItem onClick={() => setOpen(false)}>{item}</MenuItem>;
            })}
          </Menu>
        </Card>
      </Paper>
    </div>
  );
};

export default ShopCard;
