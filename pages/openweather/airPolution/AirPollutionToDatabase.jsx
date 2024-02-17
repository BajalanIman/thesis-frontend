import axios from "axios";
import React, { useEffect, useState } from "react";
import TableCurrentAirPollution from "./TableCurrentAirPollution";
import PopupMap from "./PopupMap";
import { Box, Button, Typography } from "@mui/material";

const AirPollutionToDatabase = ({ stlocation, stName, customWidth }) => {
  let lat = stlocation[0];
  let lon = stlocation[1];
  let currentDate = new Date().toISOString().split("T")[0];
  let st_name = stName;
  const [openWeaterLat, setoOpenWeaterLat] = useState();
  const [openWeaterLon, setoOpenWeaterLon] = useState();

  const [openWeaterAll, setoOpenWeaterAll] = useState({});

  const [airPloObject, setAirPloObject] = useState([]);

  const getData = async () => {
    try {
      let response = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=ae1f24cd90993757247d8601739d2cf8`
      );
      setAirPloObject(response.data?.list || []);
      setoOpenWeaterLat(response.data.coord.lat);
      setoOpenWeaterLon(response.data.coord.lon);
      setoOpenWeaterAll(response.data.list[0].components);
      // console.log(response);
      // console.log(lat, lon);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postDataToDatabase = async () => {
    const myData = {
      co: airPloObject.map((e) => e.components.co),
      nh3: airPloObject.map((e) => e.components.nh3),
      no: airPloObject.map((e) => e.components.no),
      no2: airPloObject.map((e) => e.components.no2),
      O3: airPloObject.map((e) => e.components.o3),
      pm10: airPloObject.map((e) => e.components.pm10),
      pm25: airPloObject.map((e) => e.components.pm2_5),
      so2: airPloObject.map((e) => e.components.so2),
      date: currentDate,
      station_id: 1233,
      lon: lon,
      lat: lat,
      stName: st_name,
    };

    try {
      const existingData = await axios.get("http://localhost:8800/airpolution");
      const dateExists = existingData.data.some(
        (item) => item.date && item.stName === stName
      );

      if (!dateExists) {
        await axios.post("http://localhost:8800/airpolution", myData);
        console.log("Data sent successfully");
      } else {
        console.log(
          "Data for today already exists in the database. Not adding duplicate entry."
        );
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []); // Fetch data on component mount

  useEffect(() => {
    if (airPloObject.length > 0) {
      postDataToDatabase(); // Once airPloObject is updated, post data to the database
    }
  }, [airPloObject]);
  //   console.log(airPloObject);

  // PopUp
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: "40px",
          maxWidth: "1450px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: customWidth,
            display: { xs: "inline", lg: "flex" },
            justifyContent: "center",
          }}
        >
          <Typography
            variant="p"
            sx={{
              marginTop: "5px",
              font: "Arial",
              textAlign: "justify",
            }}
          >
            Table below show the amount of the currect polluting gases in{" "}
            {stName}
          </Typography>
          <Button onClick={handleClickOpen}>
            ({openWeaterLat},{openWeaterLon}).
          </Button>
        </Box>
      </Box>
      <TableCurrentAirPollution openWeaterAll={openWeaterAll} />
      <PopupMap
        open={open}
        setOpen={setOpen}
        onClose={handleClose}
        openWeaterLat={openWeaterLat}
        openWeaterLon={openWeaterLon}
        customWidth={customWidth}
      ></PopupMap>
    </>
  );
};

export default AirPollutionToDatabase;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const AirPollutionToDatabase = ({ stlocation, stName }) => {
//   const lat = stlocation[0];
//   const lon = stlocation[1];
//   const currentDate = new Date().toISOString().split("T")[0];
//   let st_name = stName;

//   const [data, setData] = useState({});
//   const [airPloObject, setAirPloObject] = useState([]);

//   const getData = async () => {
//     try {
//       const response = await axios.get(
//         `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=ae1f24cd90993757247d8601739d2cf8`
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     if (data?.list) {
//       setAirPloObject(data.list);
//     }
//   }, [data]);

//   let days = [];
//   let allData = [];
//   let newData = [];
//   const myData = {
//     co: airPloObject.map((e) => e.components.co),
//     nh3: airPloObject.map((e) => e.components.nh3),
//     no: airPloObject.map((e) => e.components.no),
//     no2: airPloObject.map((e) => e.components.no2),
//     O3: airPloObject.map((e) => e.components.o3),
//     pm10: airPloObject.map((e) => e.components.pm10),
//     pm25: airPloObject.map((e) => e.components.pm2_5),
//     so2: airPloObject.map((e) => e.components.so2),
//     date: currentDate,
//     station_id: 1233,
//     lon: lon,
//     lat: lat,
//     stName: st_name,
//   };
//   console.log(airPloObject);

//   airPloObject.map((el, index) => {
//     days.push(index),
//       newData.push(el.components.co),
//       allData.push(el.components);
//   });
//   let co = "";

//   allData.map((el) => (co = el.co));

//   axios
//     .get("http://localhost:8800/airpolution")
//     .then((response) => {
//       const existingData = response.data;
//       const dateExists = existingData.some((item) => item.date === currentDate);

//       if (!dateExists) {
//         axios
//           .post("http://localhost:8800/airpolution", myData)
//           .then((response) => {
//             console.log("Data sent successfully:", response.data);
//           })
//           .catch((error) => {
//             console.error("Error sending data:", error);
//           });
//       } else {
//         console.log(
//           "Data for today already exists in the database. Not adding duplicate entry."
//         );
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching existing data:", error);
//     });
// };

// export default AirPollutionToDatabase;

// to database

// example to receive from database
//   const [dataFromDatabase, setDataFromDatabase] = useState([]);
//   useEffect(() => {
//     const fetchAllperson = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/airpolution");
//         setDataFromDatabase(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllperson();
//   }, []);

//   console.log(dataFromDatabase);

//

//   useEffect(() => {
//     const postData = async () => {
//       try {
//         const response = await axios.post(
//           "http://localhost:8800/airpolution",
//           myData
//         );
//         console.log("Data sent successfully:", response);
//       } catch (error) {
//         console.error("Error sending data:", error);
//       }
//     };

//     postData();
//   }, []);

//
