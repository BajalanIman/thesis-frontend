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

  return (
    <div className={btnColor ? " flex flex-col gap-2" : ""}>
      {showMenu && (
        <div
          className={
            costumAnimation
              ? "flex flex-col gap-3 animate-bounce"
              : "flex flex-col gap-3"
          }
        >
          <OWMobileBTN
            marginLeft={"8px"}
            size={"small"}
            Color={"blue"}
            bgColor={"white"}
            ariaLabel={"Weather"}
            icon={"WbSunny"}
            text={"Weather"}
          />

          <OWMobileBTN
            marginLeft={"8px"}
            size={"small"}
            Color={"blue"}
            bgColor={"white"}
            ariaLabel={"add"}
            icon={"Co2"}
            text={"Pollutants"}
          />
        </div>
      )}
      <div onClick={showMenuHandeler}>
        {!showMenu && (
          <OWMobileBTN
            marginLeft={"0px"}
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
            marginLeft={"0px"}
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
