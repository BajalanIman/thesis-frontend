import { Typography } from "@mui/material";
import React from "react";

const TextInBody = ({ variant, text, titleStyle }) => {
  return (
    <Typography
      variant={variant}
      className="font-arial text-xl flex justify-start"
      sx={{
        ...titleStyle,
        textAlign: { xs: "justify" },
      }}
    >
      {text}
    </Typography>
  );
};

export default TextInBody;
