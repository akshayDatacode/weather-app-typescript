import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const WeatherCard = ({ weatherData: { location, current } }: any) => {
  return (
    <div className="my-5">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={current?.condition.text}
          height="140"
          image={current?.condition.icon}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {location?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {current?.condition.text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temp: {current?.temp_c}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default WeatherCard