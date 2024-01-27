import { Box, Fab, Typography } from "@mui/material";
import React from "react";
import * as Icons from "@mui/icons-material";

const OWMobileBTN = ({
  size,
  Color,
  bgColor,
  icon,
  text,
  ariaLabel,
  marginLeft,
}) => {
  const IconComponent = Icons[icon];
  return (
    <>
      <Box sx={{ marginLeft: marginLeft, display: "flex", gap: "6px" }}>
        <Fab
          size={size}
          style={{
            backgroundColor: bgColor,
            color: Color,
            border: "1px solid",
            borderColor: Color,
          }}
          aria-label={ariaLabel}
        >
          <IconComponent />
        </Fab>
        {text && (
          <Typography
            variant="p"
            sx={{
              color: "blue",
              marginTop: "6px",
              fontWeight: "bold",
              ":hover": { color: "blue" },
            }}
          >
            {text}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default OWMobileBTN;
