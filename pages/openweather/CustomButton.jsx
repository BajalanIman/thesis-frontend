import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ name, handler }) => {
  return (
    <>
      <Button
        onClick={handler}
        sx={{
          backgroundColor: "darkgreen",
          color: "white",
          fontWeight: "Bold",
          marginTop: { xs: 2, md: 5 },
          paddingY: { xs: 2, md: 3 },
          width: { xs: "100%", md: 300 },
          borderTopLeftRadius: { xs: 5, md: 22 },
          borderBottomRightRadius: { xs: 5, md: 22 },
          ":hover": { backgroundColor: "#6B8E23", color: "black" },
          ":active": {
            backgroundColor: "#6B8E23",
            color: "white",
            fontWeight: "bold",
            opacity: 20,
          },
        }}
      >
        {name}
      </Button>
    </>
  );
};

export default CustomButton;
