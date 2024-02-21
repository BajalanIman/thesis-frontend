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
          marginTop: "30px",
          paddingY: 3,
          width: 300,
          borderTopRightRadius: 22,
          borderBottomLeftRadius: 22,
          ":hover": { backgroundColor: "lightGreen", color: "black" },
          ":active": {
            backgroundColor: "green",
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
