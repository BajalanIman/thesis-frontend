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

const BoselMikadoSt = ({ dataForBoselMikado }) => {
  const [mainValues, setMainValues] = useState([dataForBoselMikado]);

  useEffect(() => {
    if (Array.isArray(dataForBoselMikado)) {
      setMainValues(dataForBoselMikado);
    } else {
      setMainValues([]);
    }
  }, [dataForBoselMikado]);

  let val = [];
  if (
    Array.isArray(mainValues) &&
    mainValues.length === 1 &&
    typeof mainValues[0] === "string"
  ) {
    val = mainValues[0].split(",");

    val = val.map((item) => {
      let trimmedItem = item.trim().replace(/"/g, "");

      return !isNaN(Number(trimmedItem)) ? Number(trimmedItem) : trimmedItem;
    });
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

  modifiedArray = modifiedArray.slice(1);

  let values = modifiedArray;
  console.table(values);

  const parameterIndexes = {
    TIMESTAMP: 0,
    RECORD: 1,
    AirTC_Avg: 2,
    SlrW_Avg: 3,
    RawData10_Avg: 4,
    Permittivity10_Avg: 5,
    WaterCont10_Avg: 6,
    SoilTemp10_Avg: 7,
    RawData30_Avg: 8,
    Permittivity30_Avg: 9,
    WaterCont30_Avg: 10,
    SoilTemp30_Avg: 11,
    RawData60_Avg: 12,
    Permittivity60_Avg: 13,
    WaterCont60_Avg: 14,
    SoilTemp60_Avg: 15,
  };
  const TIMESTAMP = [];
  const RECORD = [];
  const AirTC_Avg = [];
  const SlrW_Avg = [];
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

  for (let i = parameterIndexes["TIMESTAMP"]; i < values.length; i += 16) {
    TIMESTAMP.push(values[i]);
  }
  for (let i = parameterIndexes["RECORD"]; i < values.length; i += 16) {
    RECORD.push(values[i]);
  }
  for (let i = parameterIndexes["AirTC_Avg"]; i < values.length; i += 16) {
    AirTC_Avg.push(values[i]);
  }

  for (let i = parameterIndexes["SlrW_Avg"]; i < values.length; i += 16) {
    SlrW_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["RawData10_Avg"]; i < values.length; i += 16) {
    RawData10_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["Permittivity10_Avg"];
    i < values.length;
    i += 16
  ) {
    Permittivity10_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["WaterCont10_Avg"];
    i < values.length;
    i += 16
  ) {
    WaterCont10_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["SoilTemp10_Avg"]; i < values.length; i += 16) {
    SoilTemp10_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["RawData30_Avg"]; i < values.length; i += 16) {
    RawData30_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["Permittivity30_Avg"];
    i < values.length;
    i += 16
  ) {
    Permittivity30_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["WaterCont30_Avg"];
    i < values.length;
    i += 16
  ) {
    WaterCont30_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["SoilTemp30_Avg"]; i < values.length; i += 16) {
    SoilTemp30_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["RawData60_Avg"]; i < values.length; i += 16) {
    RawData60_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["Permittivity60_Avg"];
    i < values.length;
    i += 16
  ) {
    Permittivity60_Avg.push(values[i]);
  }
  for (
    let i = parameterIndexes["WaterCont60_Avg"];
    i < values.length;
    i += 16
  ) {
    WaterCont60_Avg.push(values[i]);
  }
  for (let i = parameterIndexes["SoilTemp60_Avg"]; i < values.length; i += 16) {
    SoilTemp60_Avg.push(values[i]);
  }

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
          <b>Station: Bosel MikadoSt</b>
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
                  <TableCell component="th">AirTC_Avg</TableCell>
                  <TableCell>{AirTC_Avg.at(0)}</TableCell>
                  <TableCell>{AirTC_Avg.at(length - 1)}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox">
                  <TableCell component="th">SlrW_Avg</TableCell>
                  <TableCell>{SlrW_Avg.at(0)}</TableCell>
                  <TableCell>{SlrW_Avg.at(length - 1)}</TableCell>
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
  );
};

export default BoselMikadoSt;
