import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import WeatherService from '../services/WeatherService';
import { Box, CardMedia } from '@mui/material';

const WeatherCard = ({ country }) => {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    WeatherService
      .getWeather(country)
      .then(weather => {
        setWeather(weather);
      })
  }, [country]);

  if (!country) return;

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {country}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Temperature: {weather.main.temp}*C
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Live from space album cover"
      />
    </Card>
  )
};

export default WeatherCard;
