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
          paddingY: "10px",
          paddingX: "20px",
          borderRadius: "20px",
          ":hover": { backgroundColor: "lightGreen", color: "black" },
          ":active": { backgroundColor: "red", color: "black" },
        }}
      >
        {name}
      </Button>
    </>
  );
};

export default CustomButton;
