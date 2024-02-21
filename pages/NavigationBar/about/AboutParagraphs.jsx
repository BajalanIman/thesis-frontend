import { Typography } from "@mui/material";
import React from "react";

const AboutParagraphs = ({
  variant,
  marginTop,
  marginBottom,
  fontWeight,
  text,
}) => {
  return (
    <>
      <Typography
        variant={variant}
        sx={{
          textAlign: "justify",
          fontWeight: fontWeight,
          marginTop: marginTop,
          marginBottom: marginBottom,
          // width: {
          //   xs: "400px",
          //   sm: "450px",
          //   md: "600px",
          //   lg: "1000px",
          //   xl: "1450px",
          // },
        }}
      >
        {text}
      </Typography>
    </>
  );
};

export default AboutParagraphs;
