import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Linechart from "../Linechart";
import AirPollutionToDatabase from "./AirPollutionToDatabase";

import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App";
import { useContext } from "react";
import { Box, Typography } from "@mui/material";

const AirPollutionForecast = () => {
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
  const [airPloObject, setAirPloObject] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=ae1f24cd90993757247d8601739d2cf8`
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
    // This useEffect will trigger whenever 'data' changes
    if (data?.list) {
      // console.log(data.list);
      setAirPloObject(data.list);
    }
  }, [data]);

  let days = [];
  let newData = [];
  let allData = [];

  airPloObject.map((el, index) => {
    days.push(index),
      newData.push(el.components.co),
      allData.push(el.components);
  });

  const customWidth = {
    xs: "400px",
    sm: "450px",
    md: "600px",
    lg: "1000px",
    xl: "1400px",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <AirPollutionToDatabase
        allData={allData}
        stlocation={stlocation}
        stName={name}
        customWidth={customWidth}
      ></AirPollutionToDatabase>

      <Typography
        variant="p"
        sx={{
          width: customWidth,
          maxWidth: "1450px",
          display: "block",
          paddingY: "24px",
          font: "Arial",
          textAlign: "justify",
          paddingX: { xs: "12px", lg: "0px" },
        }}
      >
        {localize(language, "pollutingGasesOne")}
        <br></br>
        {localize(language, "pollutingGasesTwo")}
        <br></br>
        {localize(language, "pollutingGasesThree")}
      </Typography>
      <Linechart
        days={days}
        newData={allData.map((el) => el.co)}
        componentName={"Co (μg/m3)"}
        fullName={"Carbon monoxide (Co)"}
      ></Linechart>
      <Linechart
        days={days}
        newData={allData.map((el) => el.no)}
        componentName={"NO (μg/m3)"}
        fullName={"Nitrogen monoxide (No)"}
      ></Linechart>
      <Linechart
        days={days}
        newData={allData.map((el) => el.no2)}
        componentName={"NO2 (μg/m3)"}
        fullName={"Nitrogen dioxide (NO2)"}
      ></Linechart>
      <Linechart
        days={days}
        newData={allData.map((el) => el.nh3)}
        componentName={"NH3 (μg/m3)"}
        fullName={"Ammonia (NH3)"}
      ></Linechart>
      <Linechart
        days={days}
        newData={allData.map((el) => el.o3)}
        componentName={"O3 (μg/m3)"}
        fullName={"Ozone (O3)"}
      ></Linechart>
      <Linechart
        days={days}
        newData={allData.map((el) => el.so2)}
        componentName={"SO2 (μg/m3)"}
        fullName={"Sulphur dioxide (SO2)"}
      ></Linechart>
      <Linechart
        days={days}
        newData={allData.map((el) => el.pm10)}
        componentName={"PM10 (μg/m3)"}
        fullName={"particulat (PM10)"}
      ></Linechart>
      <Linechart
        days={days}
        newData={allData.map((el) => el.pm2_5)}
        componentName={"PM2.5 (μg/m3)"}
        fullName={"particulat (PM2.5)"}
      ></Linechart>
    </Box>
  );
};

export default AirPollutionForecast;
