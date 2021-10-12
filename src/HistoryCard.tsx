import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const HistoryCard = ({ historydata }: any) => {

  return (
    <>
      <div className="row mx-0 my-5">
        {
          historydata && historydata?.forecast?.forecastday[0]?.hour.map((item: any, i: any) => (
            <div className="col-4">
              <Card sx={{ maxWidth: 345 }} key={i}>
                <CardMedia
                  component="img"
                  alt={item?.condition.text}
                  height="140"
                  image={item?.condition.icon}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {/* {location?.name} */}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item?.condition.text}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Temp: {item?.temp_c}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Time: {item?.time}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default HistoryCard