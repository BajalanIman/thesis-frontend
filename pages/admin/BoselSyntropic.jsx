import React from "react";

const BoselSyntropic = ({ submitdata }) => {
  const values = [
    "2022-12-20 16:15:00",
    0,
    12.58,
    3.463,
    3.298,
    88.6,
    0.397,
    0.3573287,
    0.333,
    0.0002999034,
    15408,
    3.81,
    5.04,
    -0.04,
    14423,
    5.59,
    9.38,
    2.13,
    16444,
    2.6,
    1.94,
    3.38,
    "2022-12-20 16:30:00",
    1,
    12.57,
    3.4,
    3.186,
    88,
    0.132,
    0.1191092,
    0,
    0,
    15400,
    3.82,
    5.07,
    -0.03,
    14424,
    5.59,
    9.38,
    2.13,
    16445,
    2.6,
    1.93,
    3.34,
    "2022-12-20 16:45:00",
    2,
    12.56,
    3.185,
    3.156,
    87.6,
    0.132,
    0.1191109,
    0,
    0,
    15390,
    3.83,
    5.1,
    -0.04,
    14424,
    5.59,
    9.38,
    2.11,
    16445,
    2.6,
    1.93,
    3.36,
    "2022-12-20 17:00:00",
    3,
    12.55,
    3.014,
    3.116,
    87.3,
    0.066,
    0.05955415,
    0,
    0,
    15380,
    3.84,
    5.14,
    -0.07,
    14424,
    5.59,
    9.38,
    2.15,
    16445,
    2.6,
    1.93,
    3.34,
    "2022-12-20 17:15:00",
    4,
    12.55,
    2.93,
    3.298,
    86.7,
    0.132,
    0.1191078,
    0,
    0,
    15371,
    3.86,
    5.17,
    -0.05,
    14424,
    5.59,
    9.38,
    2.16,
    16445,
    2.6,
    1.93,
    3.35,
    "2022-12-20 17:30:00",
    5,
    12.54,
    2.93,
    3.34,
    86.3,
    0.066,
    0.05955684,
    0,
    0,
    15364,
    3.87,
    5.19,
    -0.04,
    14424,
    5.59,
    9.38,
    2.14,
    16445,
    2.6,
    1.93,
    3.37,
    "2022-12-20  17:45:00",
  ];
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

  // console.log(SoilTemp60_Avg);
  return <div>{submitdata}</div>;
};

export default BoselSyntropic;
