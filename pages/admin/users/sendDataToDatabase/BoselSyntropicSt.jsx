import {
  Box,
  Table,
  Paper,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const BoselSyntropicSt = ({ dataForBoselSyntropic }) => {
  const [mainValues, setMainValues] = useState([dataForBoselSyntropic]);

  useEffect(() => {
    if (Array.isArray(dataForBoselSyntropic)) {
      setMainValues(dataForBoselSyntropic);
    } else {
      setMainValues([]);
    }
  }, [dataForBoselSyntropic]);

  let val = [];
  if (
    Array.isArray(mainValues) &&
    mainValues.length === 1 &&
    typeof mainValues[0] === "string"
  ) {
    // Extract the string from mainValues and split it by comma
    val = mainValues[0].split(",");

    // Map through the split values and convert only numeric elements to numbers
    val = val.map((item) => {
      // Remove leading/trailing whitespaces and quotes
      let trimmedItem = item.trim().replace(/"/g, "");

      // Check if the trimmed item is a number, convert it to a number, else keep it as it is
      return !isNaN(Number(trimmedItem)) ? Number(trimmedItem) : trimmedItem;
    });

    // console.log(val); // Output: ["2022-12-20 16:15:00", 0, 12.58, 3.463, 3.298, 88.6,]
  } else {
    console.log("mainValues does not contain the expected structure.");
  }

  let modifiedArray = val.map((element) => {
    if (typeof element === "string" && element.includes("2022-")) {
      let modifiedElement = element.replace(/(2022-)/g, ", $1");

      return modifiedElement.replace(/'/g, "");
    }
    return element;
  });

  //2-------------------------------------------------------
  // let modifiedArray = val.map((element) => {
  //   if (
  //     typeof element === "string" &&
  //     /\d+\.\d+\s\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/.test(element)
  //   ) {
  //     return element.replace(/'/g, "");
  //   }
  //   return element;
  // });
  //3---------------------------------------------------------------
  // for (let i = 0; i < val.length; i++) {
  //   if (typeof val[i] === "string" && val[i].includes(" ")) {
  //     val[i] = val[i].replace(/(2022-)/g, ", $1");
  //   }
  // }

  // const filteredArray = modifiedArray.filter((item) => {
  //   // Check if the item is a string and starts and ends with single quotes
  //   return typeof item !== "string" || !/^'.*'$/.test(item);
  // });

  // console.log(modifiedArray);

  modifiedArray = modifiedArray.slice(1);

  let values = modifiedArray;
  console.table(values);
  // console.log(values);

  // let aa = [
  //   "2022-12-20 16:15:00",
  //   0,
  //   12.58,
  //   3.463,
  //   3.298,
  //   88.6,
  //   0.397,
  //   0.3573287,
  //   0.333,
  //   0.0002999034,
  //   15408,
  //   3.81,
  //   5.04,
  //   -0.04,
  //   14423,
  //   5.59,
  //   9.38,
  //   2.13,
  //   16444,
  //   2.6,
  //   1.94,
  //   "3.38 2022-12-20 16:30:00",
  //   1,
  //   12.57,
  //   3.4,
  //   3.186,
  //   88,
  //   0.132,
  //   0.1191092,
  //   0,
  //   0,
  //   15400,
  //   3.82,
  //   5.07,
  //   -0.03,
  //   14424,
  //   5.59,
  //   9.38,
  //   2.13,
  //   16445,
  //   2.6,
  //   1.93,
  //   "3.34 2022-12-20 16:45:00",
  //   2,
  //   12.56,
  //   3.185,
  //   3.156,
  //   87.6,
  //   0.132,
  //   0.1191109,
  //   0,
  //   0,
  //   15390,
  //   3.83,
  //   5.1,
  //   -0.04,
  //   14424,
  //   5.59,
  //   9.38,
  //   2.11,
  //   16445,
  //   2.6,
  //   1.93,
  //   3.36,
  // ];

  const parameterIndexes = {
    TIMESTAMP: 0,
    RECORD: 1,
    BattV_Avg: 2,
    PTemp_C_Avg: 3,
    AirTC_Avg: 4,
    RH_Max: 5,
    PAR_Den_Avg: 6,
    PAR_Tot_Tot: 7,
    SlrW_Avg: 8,
    SlrMJ_Tot: 9,
    RawData10_Avg: 10,
    Permittivity10_Avg: 11,
    WaterCont10_Avg: 12,
    SoilTemp10_Avg: 13,
    RawData30_Avg: 14,
    Permittivity30_Avg: 15,
    WaterCont30_Avg: 16,
    SoilTemp30_Avg: 17,
    RawData60_Avg: 18,
    Permittivity60_Avg: 19,
    WaterCont60_Avg: 20,
    SoilTemp60_Avg: 21,
  };
  const TIMESTAMP = [];
  const RECORD = [];
  const BattV_Avg = [];
  const PTemp_C_Avg = [];
  const AirTC_Avg = [];
  const RH_Max = [];
  const PAR_Den_Avg = [];
  const PAR_Tot_Tot = [];
  const SlrW_Avg = [];
  const SlrMJ_Tot = [];
  const RawData10_Avg = [];
  const Permittivity10_Avg = [];
  const WaterCont10_Avg = [];
  const SoilTemp10_Avg = [];
  const RawData30_Avg = [];
  const Permittivity30_Avg = [];
  const WaterCont30_Avg = [];
  const SoilTemp30_Avg = [];
  const RawData60_Avg = [];
  const Permittivity60_Avg = [];
  const WaterCont60_Avg = [];
  const SoilTemp60_Avg = [];

  for (let i = parameterIndexes["TIMESTAMP"]; i < values.length; i += 22) {
    TIMESTAMP.push(values[i]);
  }
  for (let i = parameterIndexes["RECORD"]; i < values.length; i += 22) {
    RECORD.push(values[i]);
  }
  for (let i = parameterIndexes["BattV_Avg"]; i < values.length; i += 22) {
    BattV_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["PTemp_C_Avg"]; i < values.length; i += 22) {
    PTemp_C_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["AirTC_Avg"]; i < values.length; i += 22) {
    AirTC_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["RH_Max"]; i < values.length; i += 22) {
    RH_Max.push(values[i]);
  }
  for (let i = parameterIndexes["PAR_Den_Avg"]; i < values.length; i += 22) {
    PAR_Den_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["PAR_Tot_Tot"]; i < values.length; i += 22) {
    PAR_Tot_Tot.push(values[i]);
  }
  for (let i = parameterIndexes["SlrW_Avg"]; i < values.length; i += 22) {
    SlrW_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["SlrMJ_Tot"]; i < values.length; i += 22) {
    SlrMJ_Tot.push(values[i]);
  }
  for (let i = parameterIndexes["RawData10_Avg"]; i < values.length; i += 22) {
    RawData10_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["Permittivity10_Avg"];
    i < values.length;
    i += 22
  ) {
    Permittivity10_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["WaterCont10_Avg"];
    i < values.length;
    i += 22
  ) {
    WaterCont10_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["SoilTemp10_Avg"]; i < values.length; i += 22) {
    SoilTemp10_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["RawData30_Avg"]; i < values.length; i += 22) {
    RawData30_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["Permittivity30_Avg"];
    i < values.length;
    i += 22
  ) {
    Permittivity30_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["WaterCont30_Avg"];
    i < values.length;
    i += 22
  ) {
    WaterCont30_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["SoilTemp30_Avg"]; i < values.length; i += 22) {
    SoilTemp30_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["RawData60_Avg"]; i < values.length; i += 22) {
    RawData60_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["Permittivity60_Avg"];
    i < values.length;
    i += 22
  ) {
    Permittivity60_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["WaterCont60_Avg"];
    i < values.length;
    i += 22
  ) {
    WaterCont60_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["SoilTemp60_Avg"]; i < values.length; i += 22) {
    SoilTemp60_Avg.push(values[i]);
  }
  // console.log(TIMESTAMP);
  // console.log(RECORD);
  return (
    <Box
      sx={{
        maxWidth: { xs: "450px", md: "600px", lg: "1000px" },
        maxHeight: "600px",
        marginBottom: 16,
      }}
    >
      {TIMESTAMP.length > 0 && (
        <Typography
          variant="h5"
          sx={{
            bgcolor: "green",
            paddingX: 1,
            textAlign: "center",
            height: 44,
            paddingTop: 1,
          }}
        >
          <b>Station: Bosel Syntropic</b>
        </Typography>
      )}
      {TIMESTAMP.length > 0 && (
        <Box sx={{ width: "450px", height: "600px" }}>
          <TableContainer
            component={Paper}
            sx={{ maxHeight: "560px", maxWidth: "450px" }}
          >
            <Table aria-label="simple table">
              <thead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#a1d6b2",
                    }}
                  >
                    Variables
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#a1d6b2",
                    }}
                  >
                    First value
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#a1d6b2",
                    }}
                  >
                    Last value
                  </TableCell>
                </TableRow>
              </thead>
              <tbody>
                <TableRow hover role="checkbox">
                  <TableCell component="th">TIMESTAMP</TableCell>
                  <TableCell>{TIMESTAMP.at(0)}</TableCell>
                  <TableCell>{TIMESTAMP.at(length - 1)}</TableCell>
                </TableRow>

                <TableRow hover role="checkbox">
                  <TableCell component="th">RECORD</TableCell>
                  <TableCell>{RECORD.at(0)}</TableCell>
                  <TableCell>{RECORD.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">BattV_Avg</TableCell>
                  <TableCell>{BattV_Avg.at(0)}</TableCell>
                  <TableCell>{BattV_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">PTemp_C_Avg</TableCell>
                  <TableCell>{PTemp_C_Avg.at(0)}</TableCell>
                  <TableCell>{PTemp_C_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">AirTC_Avg</TableCell>
                  <TableCell>{AirTC_Avg.at(0)}</TableCell>
                  <TableCell>{AirTC_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">RH_Max</TableCell>
                  <TableCell>{RH_Max.at(0)}</TableCell>
                  <TableCell>{RH_Max.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">PAR_Den_Avg</TableCell>
                  <TableCell>{PAR_Den_Avg.at(0)}</TableCell>
                  <TableCell>{PAR_Den_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">PAR_Tot_Tot</TableCell>
                  <TableCell>{PAR_Tot_Tot.at(0)}</TableCell>
                  <TableCell>{PAR_Tot_Tot.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">SlrW_Avg</TableCell>
                  <TableCell>{SlrW_Avg.at(0)}</TableCell>
                  <TableCell>{SlrW_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">SlrMJ_Tot</TableCell>
                  <TableCell>{SlrMJ_Tot.at(0)}</TableCell>
                  <TableCell>{SlrMJ_Tot.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">RawData10_Avg</TableCell>
                  <TableCell>{RawData10_Avg.at(0)}</TableCell>
                  <TableCell>{RawData10_Avg.at(length - 1)}</TableCell>
                </TableRow>

                <TableRow hover role="checkbox">
                  <TableCell component="th">Permittivity10_Avg</TableCell>
                  <TableCell>{Permittivity10_Avg.at(0)}</TableCell>
                  <TableCell>{Permittivity10_Avg.at(length - 1)}</TableCell>
                </TableRow>

                <TableRow hover role="checkbox">
                  <TableCell component="th">WaterCont10_Avg</TableCell>
                  <TableCell>{WaterCont10_Avg.at(0)}</TableCell>
                  <TableCell>{WaterCont10_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">SoilTemp10_Avg</TableCell>
                  <TableCell>{SoilTemp10_Avg.at(0)}</TableCell>
                  <TableCell>{SoilTemp10_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">RawData30_Avg</TableCell>
                  <TableCell>{RawData30_Avg.at(0)}</TableCell>
                  <TableCell>{RawData30_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">Permittivity30_Avg</TableCell>
                  <TableCell>{Permittivity30_Avg.at(0)}</TableCell>
                  <TableCell>{Permittivity30_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">WaterCont30_Avg</TableCell>
                  <TableCell>{WaterCont30_Avg.at(0)}</TableCell>
                  <TableCell>{WaterCont30_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">SoilTemp30_Avg</TableCell>
                  <TableCell>{SoilTemp30_Avg.at(0)}</TableCell>
                  <TableCell>{SoilTemp30_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">RawData60_Avg</TableCell>
                  <TableCell>{RawData60_Avg.at(0)}</TableCell>
                  <TableCell>{RawData60_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">Permittivity60_Avg</TableCell>
                  <TableCell>{Permittivity60_Avg.at(0)}</TableCell>
                  <TableCell>{Permittivity60_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">WaterCont60_Avg</TableCell>
                  <TableCell>{WaterCont60_Avg.at(0)}</TableCell>
                  <TableCell>{WaterCont60_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">SoilTemp60_Avg</TableCell>
                  <TableCell>{SoilTemp60_Avg.at(0)}</TableCell>
                  <TableCell>{SoilTemp60_Avg.at(length - 1)}</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>

    // <Box
    //   sx={{
    //     maxWidth: { xs: "450px", md: "600px", lg: "1000px" },
    //     maxHeight: "600px",
    //     border: "1px solid darkcyan",
    //     overflow: "auto",
    //   }}
    // >
    //   <Typography variant="h5" sx={{ bgcolor: "darkcyan", paddingX: 1 }}>
    //     <b>Station: Bosel Syntropic</b>
    //   </Typography>
    //   <Box sx={{ paddingX: 1 }}>
    //     <p> 1.TIMESTAMP: {TIMESTAMP}</p>
    //     <p> 2.RECORD: {RECORD}</p>
    //     <p> 3.BattV_Avg: {BattV_Avg}</p>
    //     <p> 4.PTemp_C_Avg: {PTemp_C_Avg}</p>
    //     <p> 5.AirTC_Avg: {AirTC_Avg}</p>
    //     <p> 6.RH_Max: {RH_Max}</p>
    //     <p> 7.PAR_Den_Avg: {PAR_Den_Avg}</p>
    //     <p> 8.PAR_Tot_Tot: {PAR_Tot_Tot}</p>
    //     <p> 9.SlrW_Avg: {SlrW_Avg}</p>
    //     <p> 10.SlrMJ_Tot: {SlrMJ_Tot}</p>
    //     <p> 11.RawData10_Avg: {RawData10_Avg}</p>
    //     <p> 12.Permittivity10_Avg: {Permittivity10_Avg}</p>
    //     <p> 13.WaterCont10_Avg: {WaterCont10_Avg}</p>
    //     <p> 14.SoilTemp10_Avg: {SoilTemp10_Avg}</p>
    //     <p> 15.RawData30_Avg: {RawData30_Avg}</p>
    //     <p> 16.Permittivity30_Avg: {Permittivity30_Avg}</p>
    //     <p> 17.WaterCont30_Avg: {WaterCont30_Avg}</p>
    //     <p> 18.SoilTemp30_Avg: {SoilTemp30_Avg}</p>
    //     <p> 19.RawData60_Avg: {RawData60_Avg}</p>
    //     <p> 20.Permittivity60_Avg: {Permittivity60_Avg}</p>
    //     <p> 21.WaterCont60_Avg: {WaterCont60_Avg}</p>
    //     <p> 22.SoilTemp60_Avg: {SoilTemp60_Avg}</p>
    //   </Box>
    // </Box>
  );
};

export default BoselSyntropicSt;
