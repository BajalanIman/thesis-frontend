import { Box } from "@mui/material";
import AirPollutionForecast from "./airPolution/AirPollutionForecast";
import Weather from "./Weather";
import { useState } from "react";
import CustomButton from "./CustomButton";
import OpenweatherMobile from "./OpenweatherMobile";

const Openweather = () => {
  const [changePollution, setChangePollution] = useState(true);
  const [changeWeather, setChangeWeather] = useState(false);

  const weatherHandler = () => {
    setChangePollution(false);
    setChangeWeather(true);
  };

  const airPolutionHandler = () => {
    setChangePollution(true);
    setChangeWeather(false);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
          <CustomButton
            handler={airPolutionHandler}
            name={"Air pollution paramaters"}
          ></CustomButton>
          <CustomButton
            handler={weatherHandler}
            name={"Weather paramaters"}
          ></CustomButton>
        </Box>
        {changeWeather && <Weather></Weather>}
        {changePollution && <AirPollutionForecast></AirPollutionForecast>}
      </Box>

      <Box
        sx={{
          position: "relative",
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
