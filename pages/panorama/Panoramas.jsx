import React, { useEffect } from "react";
import { Pannellum } from "pannellum-react";
import { Box, Typography } from "@mui/material";
// I used useLocation to recieve data that was sent by Link
import { useLocation } from "react-router-dom";
import { localize } from "../../Translation.jsx";
import { CartContext } from "../../App";
import { useContext } from "react";

import TextInBody from "./TextInBody.jsx";

const Panoramas = () => {
  let { language } = useContext(CartContext);

  const location = useLocation();
  const { state } = location;

  if (!state) {
    return <p>{localize(language, "DataNotAvailable")}</p>;
  }

  const { name, infoOne, infoTwo, infoThree } = state;

  let translation = localize(language, "icon");

  let infoOneTr = "";
  let infoTwoTr = "";
  let infoThreeTr = [];

  if (translation === "De") {
    infoOneTr = infoOne.De;
    infoTwoTr = infoTwo.De;
    if (infoThree.De.length) {
      infoThreeTr.push(infoThree.De);
    }
  }
  if (translation === "Fr") {
    infoOneTr = infoOne.Fr;
    infoTwoTr = infoTwo.Fr;
    if (infoThree.Fr.length) {
      infoThreeTr.push(infoThree.Fr);
    }
  }
  if (translation === "en") {
    infoOneTr = infoOne.En;
    infoTwoTr = infoTwo.En;
    if (infoThree.En.length) {
      infoThreeTr.push(infoThree.En);
    }
  }
  const titleStyle = {
    fontWeight: "bold",
    fontSize: "24px",
  };

  useEffect(() => {
    window.pannellum.viewer("panorama", {
      type: "equirectangular",
      panorama: "/images/Image.jpg",
      autoLoad: true,
    });
  }, []);

  const customWidth = {
    xs: "400px",
    sm: "450px",
    md: "600px",
    lg: "1000px",
    xl: "1450px",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "full",
        height: "100%",
        paddingBottom: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "rows",
          justifyContent: "start",
          width: customWidth,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            display: "inline",
            paddingX: 2,
            paddingY: { xs: "20px", md: "34px" },
          }}
        >
          {localize(language, "Station")}: {name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: customWidth,
          bgcolor: "red",
        }}
      >
        <div id="panorama" className="max-w-[1470px] w-[160vh] h-[60vh]">
          {/* The panorama will be displayed here */}
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1470px",
          width: customWidth,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "start",
            textAlign: "justify",
            gap: "20px",
            paddingTop: "20px",
          }}
        >
          <TextInBody
            text={localize(language, "Description")}
            titleStyle={titleStyle}
          />
          <TextInBody text={infoOneTr} />
          {infoOneTr.length && <TextInBody text={infoTwoTr} />}
          {infoThreeTr.length && (
            <TextInBody
              text={localize(language, "Equipment")}
              titleStyle={titleStyle}
            />
          )}
          {infoThreeTr.length && (
            <Box sx={{ width: "80%" }}>
              {infoThreeTr.map((el) =>
                el.map((e) => <Typography key={e}>{e}</Typography>)
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Panoramas;
