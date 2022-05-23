import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PokeCard = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ability: {data.ability}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PokeCard;