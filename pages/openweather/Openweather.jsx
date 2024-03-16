import { Box } from "@mui/material";
import AirPollutionForecast from "./airPolution/AirPollutionForecast";
import Weather from "./Weather";
import { useState } from "react";
import CustomButton from "./CustomButton";
import OpenweatherMobile from "./OpenweatherMobile";
import Sensors from "./sensors/Sensors";

const Openweather = () => {
  const [changePollution, setChangePollution] = useState(true);
  const [changeWeather, setChangeWeather] = useState(false);
  const [changeSensors, setChangeSensors] = useState(false);

  const weatherHandler = () => {
    setChangePollution(false);
    setChangeWeather(true);
    setChangeSensors(false);
  };

  const airPolutionHandler = () => {
    setChangePollution(true);
    setChangeWeather(false);
    setChangeSensors(false);
  };

  const sensorHandler = () => {
    setChangePollution(false);
    setChangeWeather(false);
    setChangeSensors(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          maxWidth: "1450px",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
          <CustomButton
            handler={airPolutionHandler}
            name={"Air pollution variables"}
          ></CustomButton>
          <CustomButton
            handler={weatherHandler}
            name={"Weather variables"}
          ></CustomButton>
          <CustomButton
            handler={sensorHandler}
            name={"Sensors variables"}
          ></CustomButton>
        </Box>
        {changeWeather && <Weather></Weather>}
        {changePollution && <AirPollutionForecast></AirPollutionForecast>}
        {changeSensors && <Sensors></Sensors>}
      </Box>

      <Box
        sx={{
          paddingX: 2,
          width: "100%",
          zIndex: 9999, // Adjust the z-index if needed

          display: { xs: "flex", md: "none" },
        }}
      >
        <OpenweatherMobile />
      </Box>
    </Box>
  );
};

export default Openweather;
