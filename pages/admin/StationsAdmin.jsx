import React, { useContext, useEffect, useState } from "react";
import StationOne from "./StationOne";
import StationTwo from "./StationTwo";
import StationThree from "./StationThree";
import BoselSyntropic from "./BoselSyntropic";

//  import { localize } from "../../Translation.jsx";
//  import { CartContext } from "../../App";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField, Typography } from "@mui/material";

const StationsAdmin = () => {
  //   let { language } = useContext(CartContext);

  const [station, setStation] = useState("");

  const handleChange = (event) => {
    setStation(event.target.value);
    // console.log(station);
  };

  const [textInput, setTextInput] = useState();
  //const [dataArray, setDataArray] = useState([]); // to set array for data

  const handleTextInputChange = (event) => {
    // setTextInput(event.target.value);
    if (event.target.value && event.target.value.includes(`"2022-`)) {
      const modifiedValue = event.target.value.replaceAll(`"2022-`, `,"2022 -`);
      const newValue = modifiedValue.replace(/,("2022-)/g, "$1");
      setTextInput(newValue);
      console.log(1111);
    }
  };

  const [error, setError] = useState("");

  const [submitdata, setSubmitdata] = useState();
  const [submitDataOne, setsubmitDataOne] = useState([]);
  const [submitDataTwo, setSubmitDataTwo] = useState();
  const [submitDataThree, setSubmitDataThree] = useState();

  function sumbitInputHandler() {
    if (!station) {
      setError("Please choose a station!");
      setTimeout(() => {
        setError("");
      }, 5000);
    } else if (!textInput) {
      setError("Please enter values!");
      setTimeout(() => {
        setError("");
      }, 5000);
    } else if (station === "Bosel Syntropic" && textInput) {
      setSubmitdata(textInput);
      setStation("");
      setTextInput("");
    } else if (station === "Station one") {
      setsubmitDataOne(textInput);
      setStation("");
      setTextInput("");
    } else if (station === "Station two" && textInput) {
      setSubmitDataTwo(textInput);
      setStation("");
      setTextInput("");
    } else if (station === "Station three" && textInput) {
      setSubmitDataThree(textInput);
      setStation("");
      setTextInput("");
    }
  }

  const costomWidth = {
    xs: "270px",
    sm: "330px",
    md: "350px",
    lg: "650px",
    xl: "700px",
  };

  return (
    <div className="h-screen">
      <Box
        sx={{
          marginTop: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "full",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Please select your station and import data!
        </Typography>
        <Box
          sx={{
            border: "solid 1px",
            borderColor: "lightgray",
            boxShadow: "3px 6px lightgray",
            paddingX: "30px",
            paddingY: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              width: costomWidth,
              textAlign: "center",
              position: "absolute",
              color: "red",
            }}
          >
            {error}
          </Typography>
          <Box>
            <FormControl
              color="success"
              sx={{
                marginTop: "30px",
                width: costomWidth,
                border: "solid 1px white",
                borderRadius: "5px",
              }}
              fullWidth
            >
              <InputLabel id="demo-simple-select-label" sx={{ color: "green" }}>
                Stations
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={station}
                label="Stations"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={"Station one"}>Station One</MenuItem>
                <MenuItem value={"Station two"}>Station Two</MenuItem>
                <MenuItem value={"Station three"}>Station Three</MenuItem>
                <MenuItem value={"Bosel Syntropic"}>Bosel Syntropic</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Typography
            sx={{
              marginTop: "20px",
              marginBottom: "-10px",
              width: costomWidth,
            }}
          >
            Import values for: {station}
          </Typography>
          <Box
            sx={{
              width: costomWidth,
              maxWidth: "100%",
              height: "150px",
              border: "solid 1px white",
              borderRadius: "5px",
            }}
          >
            <TextField
              multiline
              rows={5}
              label="Your values"
              color="success"
              fullWidth
              id="station"
              value={textInput}
              onChange={handleTextInputChange}
            />
          </Box>
          <Box
            sx={{
              maxWidth: costomWidth,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginY: "30px",
              gap: "20px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: {
                  xs: "270px",
                  sm: "330px",
                  md: "350px",
                  lg: "380px",
                  xl: "380px",
                },
                backgroundColor: "green",
                height: "50px",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
                marginTop: "10px",
                ":hover": {
                  backgroundColor: "green",
                },
              }}
              onClick={sumbitInputHandler}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "none" }}>
          <StationOne dataForStationOne={[submitDataOne]} />
          <StationTwo dataForStationTwo={submitDataTwo} />
          <StationThree dataForStationThree={submitDataThree} />
          <BoselSyntropic submitdata={submitdata}></BoselSyntropic>
        </Box>
      </Box>
    </div>
  );
};

export default StationsAdmin;
