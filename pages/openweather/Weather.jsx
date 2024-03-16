import OnlineWeather from "./Weather/OnlineWeather";
import WeatherForecast from "./Weather/WeatherForecast";
import temperatureIcon from "./../../../public/images/temperature.png";
import humidityIcon from "./../../../public/images/humidity.png";
// import solarirradiance from "./../../../public/images/Solarirradiance.png";
// import precipitation from "./../../../public/images/Precipitation.png";
import pressureIcon from "./../../../public/images/Pressure.png";
import windspeed from "./../../../public/images/windspeed.png";
import weatherOne from "./../../../public/images/weather.png";

import { localize } from "../../Translation.jsx";
import { CartContext } from "../../App";

import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import { Box, Divider, Grid, Typography } from "@mui/material";
import { Container } from "postcss";

const Weather = () => {
  let { language } = useContext(CartContext);

  const location = useLocation();
  const { state } = location;

  if (!state) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          gap: "15px",
        }}
      >
        <Typography>At the moment this page is not available.</Typography>
        <Link to="/">
          <Typography
            sx={{
              color: "blue",
              fontWeight: "bold",
              ":hover": { color: "lightblue", textDecoration: "underline" },
            }}
          >
            Tap to back home!
          </Typography>
        </Link>
      </Box>
    );
  }

  const { name, infoOne, infoTwo, infoThree, stlocation } = state;

  const lat = stlocation[0];
  const lon = stlocation[1];
  console.log(name);

  const [data, setData] = useState({});
  const [onlineWeatherObject, setOnlineWeatherObject] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ae1f24cd90993757247d8601739d2cf8&units=metric`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data?.list) {
      setOnlineWeatherObject(data.list);
    }
  }, [data]);

  let allData = [];
  let date = [];
  let humidity = [];
  let temperature = [];
  let pressure = [];
  let windSpeed = [];
  let weather = [];

  onlineWeatherObject.map((el, index) => {
    allData.push(el.main);
    date.push(el.dt_txt);
    humidity.push(el.main.humidity);
    temperature.push(el.main.temp);
    pressure.push(el.main.pressure);
    windSpeed.push(el.wind.speed);
    weather.push(el.weather[0].main);
    // console.log(el);
  });

  return (
    <Box sx={{ paddingX: { xs: 2, md: 0 } }}>
      <Typography
        variant="h6"
        sx={{
          // width: {
          //   xs: "400px",
          //   sm: "450px",
          //   md: "600px",
          //   lg: "1000px",
          //   xl: "1400px",
          // },
          marginTop: 7,
          textAlign: "justify",
        }}
      >
        {localize(language, "weatherInsights")}
      </Typography>

      <Divider sx={{ marginY: { xs: 3, lg: 7 } }} />
      <Typography
        variant="h6"
        sx={{
          marginY: { xs: 3, lg: 7 },
        }}
      >
        {localize(language, "onlineInformation")}
        <span className="font-bold text-blue-400">{name}</span>
        {/* <span className="text-blue-400 font-bold pl-2">
          ({lat}, {lon})
        </span> */}
      </Typography>
      <Grid container>
        <Grid item xs={6} md={4} lg={2} sx={{ marginBottom: { xs: 3, lg: 0 } }}>
          <OnlineWeather
            background={"linear-gradient(to right bottom, #36EAEF, #6B0AC9)"}
            borderColor={"lightblue"}
            title={"Temperature"}
            subTitle={`${temperature[0]} °C`}
            icon={temperatureIcon}
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          lg={2.5}
          sx={{ marginBottom: { xs: 3, lg: 0 } }}
        >
          <OnlineWeather
            background={
              "linear-gradient(to right bottom, lightgreen, darkgreen)"
            }
            borderColor={"lightgreen"}
            title={"Humidity"}
            subTitle={`${humidity[0]} (%)`}
            icon={humidityIcon}
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          lg={2.5}
          sx={{ marginBottom: { xs: 3, lg: 0 } }}
        >
          <OnlineWeather
            background={"linear-gradient(to right bottom, gray, lightgray )"}
            borderColor={"lightgray"}
            title={"Weather"}
            subTitle={`${weather[0]}`}
            icon={weatherOne}
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          lg={2.5}
          sx={{ marginBottom: { xs: 3, lg: 0 } }}
        >
          <OnlineWeather
            background={"linear-gradient(to right bottom, yellow, red)"}
            borderColor={"lightgray"}
            title={"Wind speed"}
            subTitle={`${windSpeed[0]} (m/s)`}
            icon={windspeed}
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          lg={2.5}
          sx={{ marginBottom: { xs: 3, lg: 0 } }}
        >
          <OnlineWeather
            background={"linear-gradient(to right top, #e9fbcf ,#1d7d8e)"}
            borderColor={"lightblue"}
            title={"Pressure"}
            subTitle={`${pressure[0]} (hPa)`}
            icon={pressureIcon}
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginY: { xs: 4, lg: 7 } }} />
      <WeatherForecast />
    </Box>
  );
};

export default Weather;
