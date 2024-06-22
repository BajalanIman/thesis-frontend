import { Box, Typography } from "@mui/material";
import AirPollutionForecast from "./airPolution/AirPollutionForecast";
import Weather from "./Weather";
import { useState } from "react";
import CustomButton from "./CustomButton";
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
          display: { xs: "flex", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          maxWidth: "1450px",
        }}
      >
        <Box
          sx={{
            display: { xs: "inline", md: "flex" },
            gap: { xs: 2, md: 10 },
            paddingX: { xs: 2, md: 0 },
          }}
        >
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
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Abril Fatface",
            fontWeight: 400,
            textAlign: "center",
            mt: { xs: 2, md: 7 },
          }}
        >
          Station: {state.name}
        </Typography>
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
    </Box>
  );
};

export default Openweather;
