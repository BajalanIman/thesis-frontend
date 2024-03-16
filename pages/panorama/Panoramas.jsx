import React, { useEffect } from "react";
import { Pannellum } from "pannellum-react";
import { Box, Typography } from "@mui/material";
// I used useLocation to recieve data that was sent by Link
import { useLocation } from "react-router-dom";
import { localize } from "../../Translation.jsx";
import { CartContext } from "../../App";
import { useContext } from "react";

import TextInBody from "./TextInBody.jsx";

import ImageViewerCustom from "./ImageViewerCustom.jsx";

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
  };

  useEffect(() => {
    window.pannellum.viewer("panorama", {
      type: "equirectangular",
      panorama: "/images/Eberwalde_FBG_PurePine_360 (1).jpg",
      autoLoad: true,
    });
  }, []);

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
        justifyItems: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "full",
        height: "100%",
        paddingBottom: { xs: "20px", md: "40px" },
      }}
    >
      <Box sx={{ maxWidth: "1400px", paddingX: { xs: 3, md: 0 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "rows",
            justifyContent: "start",
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
          }}
        >
          <div id="panorama" className="max-w-[1400px] w-[100vh] h-[60vh]">
            {/* The panorama will be displayed here */}
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
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
              variant={`h4`}
              text={localize(language, "Description")}
              titleStyle={titleStyle}
            />
            <TextInBody variant={`h6`} text={infoOneTr} />

            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", paddingLeft: 3 }}
            >
              Photo gallery
            </Typography>
            <ImageViewerCustom />
            {/* The below code should be removed */}
            {infoOneTr.length && <TextInBody variant={`h6`} text={infoTwoTr} />}
            {infoThreeTr.length && (
              <TextInBody
                variant={`h5`}
                text={localize(language, "Equipment")}
                titleStyle={titleStyle}
              />
            )}
            {infoThreeTr.length && (
              <Box sx={{ paddingX: 2 }}>
                {infoThreeTr.map((el) =>
                  el.map((e) => (
                    <Typography variant={`h6`} key={e}>
                      {e}
                    </Typography>
                  ))
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Panoramas;
