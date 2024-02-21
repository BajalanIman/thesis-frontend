import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Link, useNavigate } from "react-router-dom";

import StationsInfo from "../../data/Locations";
// import StationsLocation from "../map/StationsLocation";

const AllStations = () => {
  const navigate = useNavigate();
  const mainStations = StationsInfo;
  let stationNames = [];

  const [station, setStation] = useState("");
  useEffect(() => {
    mainStations.map((e) => stationNames.push(e.name));
  }, [mainStations]);

  const handleStationChange = (event) => {
    setStation(event.target.value);
    // navigate("/openweather", {
    //   state: {
    //     name: "name",
    //     infoOne: "infoOne",
    //     infoTwo: "infoTwo",
    //     infoThree: "infoThree",
    //     stlocation: "stlocations",
    //   },
    // });
  };

  return (
    <Box sx={{ minWidth: { xs: 170, md: 600 } }}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "white" }} id="demo-simple-select-label">
          Station
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={station}
          label="Station"
          onChange={handleStationChange}
        >
          {mainStations.map((el, index) =>
            el.name && typeof el.name === "string" ? (
              <MenuItem key={index} value={el.name}>
                <Link
                  to={{
                    pathname: "/openweather",
                    state: {
                      name: el.name,
                      infoOne: el.infoOne,
                      infoTwo: el.infoTwo,
                      infoThree: el.infoThree,
                      stlocation: el.location,
                    },
                  }}
                >
                  {el.name}
                </Link>
              </MenuItem>
            ) : null
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AllStations;

// {mainStations.map((element, index) =>
//     element && typeof element.title === "string" ? (
//       <MenuItem key={index} value={element.title}>
//         {element.title}
//       </MenuItem>
//     ) : null
//   )}

// {stationInformation.map((el) => {
//     return (
//       <StationsLocation
//         key={el.id}
//         name={el.name}
//         stlocation={el.location}
//         panorama={el.panorama}
//         infoOne={el.infoOne}
//         infoTwo={el.infoTwo}
//         infoThree={el.infoThree}
//       ></StationsLocation>
//     );
//   })}
