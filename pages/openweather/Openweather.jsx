import { Box } from "@mui/material";
import AirPollutionForecast from "./airPolution/AirPollutionForecast";
import Weather from "./Weather";
import { useState } from "react";
import CustomButton from "./CustomButton";
import OpenweatherMobile from "./OpenweatherMobile";
import Sensors from "./sensors/Sensors";
import { useLocation } from "react-router-dom";

const Openweather = () => {
  const location = useLocation();
  const { state } = location;

  const [currentView, setCurrentView] = useState("sensors");

  const changeView = (view) => {
    setCurrentView(view);
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
            handler={() => changeView("weather")}
            name={"Climate variables"}
          />
          <CustomButton
            handler={() => changeView("sensors")}
            name={"Sensors variables"}
          />
          <CustomButton
            handler={() => changeView("pollution")}
            name={"Air pollution variables"}
          />
        </Box>
        {currentView === "weather" && <Weather />}
        {currentView === "pollution" && state && (
          <AirPollutionForecast
            name={state.name}
            infoOne={state.infoOne}
            infoTwo={state.infoTwo}
            infoThree={state.infoThree}
            stlocation={state.stlocation}
          />
        )}
        {currentView === "sensors" && <Sensors />}
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
