import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Latest = () => {

  const [weatherData, setWeatherData] = useState()
  const [city, setCity] = useState('')

  const getWeather = (params: string) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=0ad7a4722fe74257ac0124324211110&q=${params}&aqi=no`
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          console.log("red", res)
        }
        res.json().then(data => {
          if (data) {
            setWeatherData(data)
            console.log("data", data)
          }
        })
      })
      .catch((er) => {
        console.log("frtg", er)
      });
  }

  const handleSearch = (city: any) => {
    getWeather(city)
  }

  const handleChange = (e: any) => {
    setCity(e.target.value)
  }

  return (
    <>
      <h1 className="my-4">Latest</h1>
      <Stack direction="row" spacing={2}>
        <TextField id="outlined-basic" label="Search By City" variant="outlined" value={city} name="city" onChange={(e) => handleChange(e)} />
        <button
          className="btn btn-success"
          onClick={() => handleSearch(city)}
        >
          Check Weather
        </button>
      </Stack>
      {
        weatherData ?
          <WeatherCard weatherData={weatherData} />
          : ""
      }
    </>
  )
}
export default Latest
