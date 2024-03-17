import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExampleDatabase from "../../../data/ExampleDatabase";
import { Line } from "react-chartjs-2";

const SensorsLinechartMultiTwoY = ({ title, paragraph }) => {
  const data1 = ExampleDatabase;

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  useEffect(() => {
    let filteredDates = data1;

    // Apply year filter
    if (year !== "") {
      filteredDates = filteredDates.filter((el) => {
        const newYear = new Date(el.TIMESTAMP).getFullYear();
        return newYear === parseInt(year);
      });
    }

    // Apply month filter
    if (month !== "") {
      const monthIndex = new Date(`${month} 1, 2000`).getMonth();
      filteredDates = filteredDates.filter((el) => {
        const monthFromData = new Date(el.TIMESTAMP).getMonth();
        return monthFromData === monthIndex;
      });
    }

    setFilteredData(filteredDates);
  }, [year, month]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = filteredData.map((el) => {
    const timestamp = new Date(el.TIMESTAMP);
    return `${
      monthNames[timestamp.getMonth()]
    } ${timestamp.getDate()} ${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
  });

  const SoilTemp10 = filteredData.map((el) => el.SoilTemp10_Avg);
  const SoilTemp30 = filteredData.map((el) => el.SoilTemp30_Avg);
  const SoilTemp60 = filteredData.map((el) => el.SoilTemp60_Avg);
  const WaterCont10 = filteredData.map((el) => el.WaterCont10_Avg);
  const WaterCont30 = filteredData.map((el) => el.WaterCont30_Avg);
  const WaterCont60 = filteredData.map((el) => el.WaterCont60_Avg);

  const data = {
    labels: date,
    datasets: [
      {
        label: "Soil Temp 10",
        data: SoilTemp10,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4,
      },
      {
        label: "Soil Temp 30",
        data: SoilTemp30,
        fill: false,
        borderColor: "#742774",
      },
      {
        label: "Soil Temp 60",
        data: SoilTemp60,
        fill: false,
        borderColor: "#122774",
      },

      {
        label: "Water Cont 10",
        data: WaterCont10,
        fill: false,
        borderColor: "rgba(205,212,292,2)",
        tension: 0.4,
        yAxisID: "percentage",
      },
      {
        label: "Water Cont 30",
        data: WaterCont30,
        fill: false,
        borderColor: "rgba(175,92,192,1)",
        tension: 0.4,
        yAxisID: "percentage",
      },
      {
        label: "Water Cont 60",
        data: WaterCont60,
        fill: false,
        borderColor: "rgba(200,22,192,1)",
        tension: 0.4,
        yAxisID: "percentage",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },

    scales: {
      x: {
        title: {
          display: true,
          text: "Date and time",
          font: {
            size: 16,
            weight: "bold",
          },
        },
        grid: {
          color: "#BDBDBD",
          borderColor: "grey",
          tickColor: "grey",
        },
      },
      y: {
        title: {
          display: true,
          text: "Soil temprature ( °C)",
          font: {
            size: 16,
            weight: "bold",
          },
        },
        grid: {
          color: "#BDBDBD",
          borderColor: "grey",
          tickColor: "grey",
        },
        // min: 3,
        // max: 6,
      },
      percentage: {
        position: "right",
        title: {
          display: true,
          text: "Water content (%)",
          font: {
            size: 16,
            weight: "bold",
          },
        },
        grid: {
          color: "#BDBDBD",
          borderColor: "grey",
          tickColor: "grey",
        },
        // min: 3,
        // max: 6,
      },
    },
  };

  return (
    <Box
      sx={{
        MaxWidth: {
          xs: "400px",
          sm: "450px",
          md: "600px",
          lg: "1000px",
          xl: "1400px",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          maxWidth: "full",
          display: "flex",
          flexDirection: "column",
          paddingX: { xs: 2, md: 0 },
          gap: 2,
          marginY: 8,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "justify" }}>
          {paragraph}
        </Typography>
      </Box>
      <Box sx={{ minWidth: { xs: 170, md: 600 } }}>
        {/* Year */}
        <FormControl fullWidth>
          <InputLabel sx={{ color: "green" }} id="demo-simple-select-label">
            Year
          </InputLabel>
          <Select value={year} onChange={handleYearChange}>
            <MenuItem value="">Select Year</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>
        </FormControl>
        {/* Months */}
        <FormControl fullWidth sx={{ marginTop: 5 }}>
          <InputLabel sx={{ color: "green" }} id="demo-simple-select-label">
            Month
          </InputLabel>
          <Select value={month} onChange={handleMonthChange}>
            <MenuItem value="">All months</MenuItem>
            {monthNames.map((ele, index) => (
              <MenuItem key={index} value={ele}>
                {ele}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Line data={data} options={options} />
    </Box>
  );
};

export default SensorsLinechartMultiTwoY;
