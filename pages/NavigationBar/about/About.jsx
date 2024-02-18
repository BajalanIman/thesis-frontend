import AboutParagraphs from "./AboutParagraphs.jsx";
import BackgroundHighlight from "../help/BackgroundHighlight.jsx";

import { Box, Divider, Typography } from "@mui/material";
import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App.jsx";

import React, { useContext } from "react";
// import AboutParagraphs from "./AboutParagraphs.jsx";

const About = () => {
  let { language } = useContext(CartContext);

  const customizedWidth = {
    xs: "400px",
    sm: "450px",
    md: "600px",
    lg: "1000px",
    xl: "1450px",
  };

  return (
    <div className="flex justify-center relative">
      <Box
        sx={{
          width: customizedWidth,
          position: "relative",
          zIndex: 10,
        }}
      >
        <AboutParagraphs
          variant={"h4"}
          marginTop={8}
          marginBottom={3}
          fontWeight={"bold"}
          text={localize(language, "aboutApplication")}
        />
        <AboutParagraphs
          variant={"h6"}
          marginBottom={5}
          text={localize(language, "aboutApplicationP1")}
        />

        <AboutParagraphs
          variant={"h4"}
          marginTop={8}
          marginBottom={3}
          fontWeight={"bold"}
          text={localize(language, "ourMission")}
        />
        <AboutParagraphs
          variant={"h6"}
          text={localize(language, "ourMissionP1")}
        />

        <Divider sx={{ padding: 2 }}></Divider>
        <AboutParagraphs
          variant={"h4"}
          marginTop={8}
          marginBottom={3}
          fontWeight={"bold"}
          text={localize(language, "keyFeatures")}
        />
        <AboutParagraphs
          variant={"h5"}
          marginTop={4}
          marginBottom={2}
          fontWeight={"bold"}
          text={localize(language, "interactiveMaps")}
        />
        <AboutParagraphs
          variant={"h6"}
          marginBottom={3}
          text={localize(language, "interactiveMapsP1")}
        />
        <AboutParagraphs
          variant={"h5"}
          marginTop={4}
          marginBottom={2}
          fontWeight={"bold"}
          text={localize(language, "comprehensiveData")}
        />
        <AboutParagraphs
          variant={"h6"}
          marginBottom={3}
          text={localize(language, "comprehensiveDataP1")}
        />
        <AboutParagraphs
          variant={"h5"}
          marginTop={4}
          marginBottom={2}
          fontWeight={"bold"}
          text={localize(language, "historicalInsights")}
        />
        <AboutParagraphs
          variant={"h6"}
          marginBottom={3}
          text={localize(language, "historicalInsightsP1")}
        />
        <AboutParagraphs
          variant={"h5"}
          marginTop={4}
          marginBottom={2}
          fontWeight={"bold"}
          text={localize(language, "focusOnForests")}
        />
        <AboutParagraphs
          variant={"h6"}
          marginBottom={3}
          text={localize(language, "focusOnForestsP1")}
        />

        <Divider sx={{ padding: 2 }}></Divider>
        <AboutParagraphs
          variant={"h4"}
          marginTop={6}
          marginBottom={2}
          fontWeight={"bold"}
          text={localize(language, "ourCommitment")}
        />
        <AboutParagraphs
          variant={"h6"}
          marginBottom={3}
          text={localize(language, "ourCommitmentp1")}
        />
        <Divider sx={{ padding: 2 }}></Divider>
        <AboutParagraphs
          variant={"h4"}
          marginTop={6}
          marginBottom={2}
          fontWeight={"bold"}
          text={localize(language, "getInvolved")}
        />
        <AboutParagraphs
          variant={"h6"}
          marginBottom={3}
          text={localize(language, "getInvolvedP1")}
        />
        <Divider sx={{ padding: 2 }}></Divider>
        <AboutParagraphs
          variant={"h4"}
          marginTop={6}
          marginBottom={2}
          fontWeight={"bold"}
          text={localize(language, "contactUs")}
        />
        <AboutParagraphs
          variant={"h6"}
          marginBottom={3}
          text={localize(language, "contactUsP1")}
        />
        <AboutParagraphs
          variant={"h6"}
          marginBottom={8}
          text={localize(language, "contactUsP2")}
        />
      </Box>
      <BackgroundHighlight />
    </div>
  );
};

export default About;
