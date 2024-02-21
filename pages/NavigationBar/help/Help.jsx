import HelpParagraphs from "./HelpParagraphs.jsx";
import BackgroundHighlight from "./BackgroundHighlight.jsx";

import { Box, Divider, Typography } from "@mui/material";
import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App.jsx";

import React, { useContext } from "react";

const Help = () => {
  let { language } = useContext(CartContext);

  return (
    <div className="flex justify-center relative">
      <Box
        sx={{
          // width: {
          //   xs: "400px",
          //   sm: "450px",
          //   md: "600px",
          //   lg: "1000px",
          //   xl: "1450px",
          // },
          maxWidth: "1450px",
          position: "relative",
          paddingX: { xs: 2, md: 0 },
          zIndex: 10,
        }}
      >
        <HelpParagraphs
          variant={"h4"}
          marginTop={8}
          marginBottom={3}
          fontWeight={"bold"}
          text={localize(language, "helpNavigating")}
        />
        <HelpParagraphs
          variant={"h6"}
          marginBottom={3}
          text={localize(language, "helpNavigatingP")}
        />
        <HelpParagraphs
          variant={"h4"}
          marginTop={8}
          marginBottom={3}
          fontWeight={"bold"}
          text={localize(language, "gettingStarted")}
        />
        <HelpParagraphs
          variant={"h6"}
          marginBottom={3}
          text={localize(language, "gettingStartedP")}
        />
        <HelpParagraphs
          variant={"h6"}
          marginBottom={3}
          no={"1: "}
          textTwo={localize(language, "exploreFeatures")}
          textThree={localize(language, "exploreFeaturesP")}
        />
        <HelpParagraphs
          variant={"h6"}
          marginBottom={3}
          no={"2: "}
          textTwo={localize(language, "navigatingDashboard")}
          textThree={localize(language, "navigatingDashboardP")}
        />
        <HelpParagraphs
          variant={"h6"}
          marginBottom={3}
          no={"3: "}
          textTwo={localize(language, "interactiveMapsHelp")}
          textThree={localize(language, "interactiveMapsHelpP1")}
        />
        <HelpParagraphs
          variant={"h6"}
          marginBottom={3}
          no={"4: "}
          textTwo={localize(language, "accessingData")}
          textThree={localize(language, "accessingDataP1")}
        />
        <HelpParagraphs
          variant={"h4"}
          marginTop={8}
          marginBottom={3}
          fontWeight={"bold"}
          text={localize(language, "frequentlyAskedQuestions")}
        />
        <HelpParagraphs
          variant={"h5"}
          marginTop={4}
          marginBottom={2}
          fontWeight={"bold"}
          text={localize(language, "howFrequentlyUpdated")}
        />
        <HelpParagraphs
          variant={"h6"}
          marginBottom={5}
          text={localize(language, "howFrequentlyUpdatedP1")}
        />
        <HelpParagraphs
          variant={"h5"}
          marginTop={4}
          marginBottom={2}
          fontWeight={"bold"}
          text={localize(language, "canAccessHistoricalData")}
        />
        <HelpParagraphs
          variant={"h6"}
          marginBottom={5}
          text={localize(language, "canAccessHistoricalDataP1")}
        />
        <HelpParagraphs
          variant={"h5"}
          marginTop={4}
          marginBottom={2}
          fontWeight={"bold"}
          text={localize(language, "HowCanInterpretDat")}
        />
        <HelpParagraphs
          variant={"h6"}
          marginBottom={5}
          text={localize(language, "HowCanInterpretDatP1")}
        />
        <HelpParagraphs
          variant={"h5"}
          marginTop={4}
          marginBottom={2}
          fontWeight={"bold"}
          text={localize(language, "accessibleMobileDevices")}
        />
        <HelpParagraphs
          variant={"h6"}
          marginBottom={5}
          text={localize(language, "accessibleMobileDevicesP1")}
        />
      </Box>
      {/* <BackgroundHighlight /> */}
    </div>
  );
};

export default Help;
