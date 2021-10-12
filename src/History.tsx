import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import HistoryCard from './HistoryCard';

const History = (date: any) => {
  const [weatherData, setWeatherData] = useState()
  const [city, setCity] = useState('')
  const getWeather = (params: string) => {
    const url = `http://api.weatherapi.com/v1/history.json?key=0ad7a4722fe74257ac0124324211110&q=${params}&dt=${formatDate()}`
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

  const formatDate = () => {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  return (
    <>
      <h1 className="my-4">History</h1>
      <div className="">

      </div>
      <Stack direction="row" spacing={2}>
        <TextField id="outlined-basic" label="Search By City" variant="outlined" value={city} name="city" onChange={(e) => handleChange(e)} />
        <button
          className="btn btn-success"
          onClick={() => handleSearch(city)}
        >
          Check Weather History
        </button>
      </Stack>
      {
        weatherData ?
          < HistoryCard historydata={weatherData} />
          : ""
      }
    </>
  )
}

export default History
