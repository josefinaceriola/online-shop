import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ShopCard = ({ title, picture, link }) => {
  return (
    <div className='my-3 col-12 col-md-6 d-flex justify-content-center align-items-center'>
      <Card style={{ width: '100%', height: 'auto' }}>
        <CardActionArea>
          <CardMedia component='img' height='160' src={picture} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href={`${link}`} target='_blank'>
            <Button size='small' variant='contained' color='primary'>
              Visit Website
            </Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default ShopCard;
