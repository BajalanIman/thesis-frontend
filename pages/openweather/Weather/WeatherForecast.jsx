import Linechart from "../Linechart";
import LineChartMulti from "../LineChartMulti";

import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App";
import { useContext } from "react";

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const WeatherForecast = () => {
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

  const [data, setData] = useState({});
  const [onlineWeatherObject, setOnlineWeatherObject] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ae1f24cd90993757247d8601739d2cf8&units=metric`
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
  let windSpeed = [];

  onlineWeatherObject.map((el) => {
    allData.push(el.main);
    date.push(el.dt_txt);
    windSpeed.push(el.wind);
    console.log(allData);
  });

  return (
    <div>
      <Typography
        variant="h6"
        sx={{
          width: {
            xs: "400px",
            sm: "450px",
            md: "600px",
            lg: "1000px",
            xl: "1400px",
          },
          paddingBottom: 5,
          textAlign: "justify",
        }}
      >
        {localize(language, "temperatureForecasts")}
      </Typography>
      <LineChartMulti
        days={date}
        newDataOne={allData.map((el) => el.temp)}
        newDataTwo={allData.map((el) => el.temp_max)}
        newDataThree={allData.map((el) => el.temp_min)}
        labelOne={"Temperature (°C)"}
        labelTwo={"Max (°C)"}
        labelThree={"Min (°C)"}
        yText={"Temperature (°C)"}
        fullName={"temperature"}
      />
      <Typography
        variant="h6"
        sx={{
          width: {
            xs: "400px",
            sm: "450px",
            md: "600px",
            lg: "1000px",
            xl: "1400px",
          },
          paddingBottom: 5,
          textAlign: "justify",
        }}
      >
        {localize(language, "humidityForecasts")}
      </Typography>
      <Linechart
        days={date}
        newData={allData.map((el) => el.humidity)}
        componentName={"Humidity (%)"}
        fullName={"Humidity"}
      />
      <Typography
        variant="h6"
        sx={{
          width: {
            xs: "400px",
            sm: "450px",
            md: "600px",
            lg: "1000px",
            xl: "1400px",
          },
          paddingBottom: 5,
          textAlign: "justify",
        }}
      >
        {localize(language, "pressureForecasts")}
      </Typography>
      <Linechart
        days={date}
        newData={allData.map((el) => el.pressure)}
        componentName={"Pressure (hPa)"}
        fullName={"Pressure"}
      />
      <Typography
        variant="h6"
        sx={{
          width: {
            xs: "400px",
            sm: "450px",
            md: "600px",
            lg: "1000px",
            xl: "1400px",
          },
          paddingBottom: 5,
          textAlign: "justify",
        }}
      >
        {localize(language, "windSpeed")}
      </Typography>
      <Linechart
        days={date}
        newData={windSpeed.map((el) => el.speed)}
        componentName={"Wind speed (m/s)"}
        fullName={"Wind speed"}
      />
    </div>
  );
};

export default WeatherForecast;
