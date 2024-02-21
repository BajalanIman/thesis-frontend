import AirPollutionForecast from "./airPolution/AirPollutionForecast";
import Weather from "./Weather";

import React, { useState } from "react";
import OWMobileBTN from "./OWMobileBTN";
import { Box } from "@mui/material";

const OpenweatherMobile = () => {
  const [btnColor, setBtnColor] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [costumAnimation, setCostumAnimation] = useState(false);

  const animation = "animate-bounce";

  const showMenuHandeler = () => {
    setShowMenu(true);
    setTimeout(() => {
      setShowMenu(false);
    }, 7000);
    setCostumAnimation(true);
    setTimeout(() => {
      setCostumAnimation(false);
    }, 1200);
  };
  const hideMenuHandeler = () => {
    setShowMenu(false);
    setCostumAnimation(false);
  };

  const [changePollution, setChangePollution] = useState(true);
  const [changeWeather, setChangeWeather] = useState(false);

  const weatherHandler = () => {
    setChangePollution(true);
    setChangeWeather(false);
  };

  const airPolutionHandler = () => {
    setChangePollution(false);
    setChangeWeather(true);
  };

  return (
    <div className={btnColor ? " flex flex-col gap-2" : ""}>
      {changeWeather && <Weather></Weather>}
      {changePollution && <AirPollutionForecast></AirPollutionForecast>}
      {showMenu && (
        <div
          className={
            costumAnimation
              ? "flex flex-col gap-3 animate-bounce"
              : "flex flex-col gap-3 "
          }
        >
          <OWMobileBTN
            size={"small"}
            Color={"green"}
            bgColor={"white"}
            ariaLabel={"Weather"}
            icon={"WbSunny"}
            text={"Weather"}
            handler={airPolutionHandler}
            name={"Air pollution paramaters"}
          />

          <OWMobileBTN
            size={"small"}
            Color={"green"}
            bgColor={"white"}
            ariaLabel={"add"}
            icon={"Co2"}
            text={"Pollutants"}
            handler={weatherHandler}
          />
        </div>
      )}
      <div onClick={showMenuHandeler}>
        {!showMenu && (
          <OWMobileBTN
            size={"large"}
            Color={"white"}
            bgColor={"#f73378"}
            ariaLabel={"add"}
            icon={"Add"}
          />
        )}
      </div>
      <div onClick={hideMenuHandeler}>
        {showMenu && (
          <OWMobileBTN
            size={"large"}
            Color={"white"}
            bgColor={"#f73378"}
            ariaLabel={"Remove"}
            icon={"Remove"}
          />
        )}
      </div>
    </div>
  );
};

export default OpenweatherMobile;
