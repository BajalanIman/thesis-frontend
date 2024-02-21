import { Typography } from "@mui/material";
import React from "react";

const TextInBody = ({ variant, text, titleStyle }) => {
  return (
    <Typography
      variant={variant}
      sx={{
        ...titleStyle,
      }}
    >
      {text}
    </Typography>
  );
};

export default TextInBody;
