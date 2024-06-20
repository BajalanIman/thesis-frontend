import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Divider, Typography } from "@mui/material";

import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App";

import SensorsLinechartMulti from "./SensorsLinechartMulti";
import SensorsLinechartMultiClimate from "./SensorsLinechartMultiClimate.jsx";
import SensorsLinechartMultiClimateTwoside from "./SensorsLinechartMultiClimateTwoside.jsx";

const Sensors = () => {
  const { language } = useContext(CartContext);
  const location = useLocation();
  const { state } = location;
  const stationName = state?.name || "";
  const [soilMeasurements, setSoilMeasurements] = useState([]);
  const [soilData, setSoilData] = useState([]);
  const [climateMeasurements, setClimateMeasurements] = useState([]);
  const [climateData, setClimateData] = useState([]);

  const getStationId = (name) => {
    switch (name) {
      case "Haselberg: Digital forest lab":
        return 6;
      case "Eberswalde: Buche":
        return 7;
      case "Eberswalde: Clear cut station":
        return 8;
      case "Eberswalde: Pure pine station":
        return 9;
      case "Alt-Madlitz: Conventional":
        return 10;
      case "Alt-Madlitz: Clear cut":
        return 11;
      case "Alt-Madlitz: Mikado":
        return 12;
      case "Alt-Madlitz: Syntropic":
        return 13;
      case "Alt-Madlitz: Natural succession dynamics":
        return 14;
      case "Agroforst (1)":
        return 15;
      case "Agroforst (2)":
        return 16;
      case "Agroforst (3)":
        return 17;
      case "Agroforst (4)":
        return 18;
      default:
        return null;
    }
  };

  const stationId = getStationId(stationName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/soil_measurements"
        );
        setSoilMeasurements(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/climate_measurements"
        );
        setClimateMeasurements(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (stationId !== null) {
      const filteredData = soilMeasurements.filter(
        (e) => e.station_id === stationId
      );
      setSoilData(filteredData);
      const filteredClimateData = climateMeasurements.filter(
        (el) => el.station_id === stationId
      );
      setClimateData(filteredClimateData);
    }
  }, [soilMeasurements, climateMeasurements, stationId]);

  console.log("clim data", climateData);
  console.log("soil data", soilData);

  return (
    <div className="mt-16 h-full mb-28 flex-cols gap-4">
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Station: {stationName}
      </Typography>
      <Typography variant="body1" mt={4}>
        On this page, only a selection of the variables collected from the
        station is shown. For more detailed information about additional
        variables and data points collected by the station, please contact the
        administrator. They can provide comprehensive insights and access to the
        full dataset.
      </Typography>
      <SensorsLinechartMulti
        title={"Soil temperature"}
        attribute_id_One={4}
        attribute_id_Two={8}
        attribute_id_Three={12}
        paragraph={localize(language, "soilDifferentDeep")}
        Ylabel={"Soil temperature (°C)"}
        VariableOne={"10 cm"}
        VariableTwo={"30 cm"}
        VariableThree={"60 cm"}
        mainData={soilData}
        XCaption={
          "The chart above shows soil temperature daily at 12:00 at different depths."
        }
      />
      <Divider />
      <SensorsLinechartMulti
        title={"Water content"}
        attribute_id_One={3}
        attribute_id_Two={7}
        attribute_id_Three={11}
        paragraph={localize(language, "waterDifferentDeep")}
        Ylabel={"Water content (%)"}
        VariableOne={"10 cm"}
        VariableTwo={"30 cm"}
        VariableThree={"60 cm"}
        mainData={soilData}
        XCaption={
          "The chart above shows water content daily at 12:00 at different depths."
        }
      />
      <Divider />
      <SensorsLinechartMulti
        title={"Permittivity"}
        attribute_id_One={2}
        attribute_id_Two={6}
        attribute_id_Three={10}
        paragraph={`Permittivity in soil, also known as the dielectric constant, is a measure of how much the soil can store electrical energy in an electric field, reflecting its ability to transmit an electric field. This property is crucial in fields such as agriculture, hydrology, and environmental science, as it affects soil moisture content measurements and soil behavior under electrical fields. Defined as a material property indicating how an electric field affects and is affected by a dielectric medium, soil permittivity refers to the soil's ability to hold and transmit electrical charges. Typically measured using dielectric sensors, which send an electrical signal through the soil and measure the response, this measurement can estimate soil moisture content since water has a high permittivity compared to dry soil components. Water significantly increases soil permittivity because polar water molecules align with the electric field, making permittivity a proxy for soil moisture content. Applications include optimizing irrigation practices in agriculture, understanding soil properties for construction and land management in geotechnical engineering, and studying water movement and soil health in environmental science. Factors such as soil type, density, temperature, and salinity influence soil permittivity, making it a valuable parameter for improving irrigation efficiency, managing water resources, and studying environmental changes.`}
        Ylabel={"Permittivity (ε)"}
        VariableOne={"10 cm"}
        VariableTwo={"30 cm"}
        VariableThree={"60 cm"}
        mainData={soilData}
        XCaption={
          "The chart above shows the permittivity daily at 12:00 at different depths."
        }
      />
      <Divider />
      <SensorsLinechartMultiClimate
        title={"Relative humidity"}
        attribute_id_One={2}
        attribute_id_Two={3}
        paragraph={
          "Relative humidity (RH) is a measure of the amount of moisture in the air compared to the maximum amount of moisture the air can hold at a given temperature. Maximum relative humidity represents the highest relative humidity recorded over a specific period, typically within a day. This value indicates the point at which the air is most saturated with moisture. Minimum relative humidity represents the lowest relative humidity recorded over the same period, indicating the driest point of the air. Monitoring these values helps in understanding humidity trends, assessing comfort levels, predicting dew points, and managing agricultural and industrial processes. High relative humidity can affect human comfort and health, as well as influence weather patterns and precipitation."
        }
        Ylabel={"Relative humidity (%)"}
        VariableOne={"Maximum relative humidity"}
        VariableTwo={"Minimum relative humidity"}
        mainData={climateData}
        XCaption={
          "The chart above shows the maximum and minimum relative humidity daily at 12:00."
        }
      />{" "}
      <Divider />
      <SensorsLinechartMultiClimate
        title={"Air temperature"}
        attribute_id_One={1}
        paragraph={
          "Air temperature (AirTC), with its unit being degrees Celsius (°C) is a fundamental meteorological parameter essential for weather forecasting, climate monitoring, and various environmental and agricultural applications. Accurate air temperature readings help in understanding and predicting weather patterns, managing heating and cooling needs, and studying the effects of temperature on ecosystems. This data is typically collected using thermometers or temperature sensors, which provide precise and reliable information about the ambient air temperature."
        }
        Ylabel={"Air temperature (°C)"}
        VariableOne={"Air temperature"}
        mainData={climateData}
        XCaption={"The chart above shows the air temperature daily at 12:00."}
      />
      <Divider />
      {/* <SensorsLinechartMultiClimate
        title={"Average Solar Radiation"}
        attribute_id_One={4}
        // attribute_id_Two={5}
        paragraph={
          "Average Solar Radiation (SlrW) measured in watts per square meter (W/m²). This measurement represents the average solar power received on a horizontal surface per unit area over a specific time interval, typically an hour or a day. It is a critical parameter in understanding the intensity of solar energy available for processes like photosynthesis, solar power generation, and climate studies. By averaging solar radiation over time, it helps in assessing the consistency and fluctuations in solar energy input, which is vital for optimizing the performance of solar panels, planning agricultural activities, and analyzing environmental conditions. This data is typically collected using instruments such as pyranometers, providing insights into the temporal patterns of solar energy."
        }
        Ylabel={"Average Solar Radiation (W/m^2)"}
        VariableOne={"Average Solar Radiation"}
        // VariableTwo={"SlrW"}
        mainData={climateData}
        XCaption={
          "The chart above shows the Average Solar Radiation daily at 12:00."
        }
      />{" "}
      <Divider />
       <SensorsLinechartMultiClimate
        title={"Total Solar Radiation "}
        attribute_id_One={5}
        paragraph={`Solar Radiation Total (SlrMJ) is measured in megajoules per square meter (MJ/m²), representing the total solar energy received on a horizontal surface per unit area over a given period, typically a day. This measurement is crucial for understanding solar energy inputs in environmental and agricultural studies, as well as applications related to solar power generation. It helps in analyzing plant growth patterns, crop yields, solar panel efficiency, and climate modeling. Solar radiation is typically measured using pyranometers or silicon photodiode sensors at weather stations, with the data often summarized daily to show variations in solar energy received across different times of the year.`}
        Ylabel={"Total Solar Radiation (MJ/m^2)"}
        VariableOne={"Total Solar Radiation"}
        mainData={climateData}
        XCaption={
          "The chart above shows the Total Solar Radiation (SlrMJ) daily at 12:00."
        }
      /> */}
      <SensorsLinechartMultiClimateTwoside
        title={"Solar Radiation"}
        attribute_id_One={4}
        attribute_id_Two={5}
        paragraph={
          "Solar Radiation Total (SlrMJ), measured in megajoules per square meter (MJ/m²), and Average Solar Radiation (SlrW), measured in watts per square meter (W/m²), are critical for understanding solar energy inputs in various fields such as environmental and agricultural studies and solar power generation. SlrMJ represents the total solar energy received on a horizontal surface per unit area over a given period, typically a day, and is crucial for analyzing plant growth patterns, crop yields, solar panel efficiency, and climate modeling. On the other hand, SlrW represents the average solar power received on a horizontal surface per unit area over a specific time interval, typically an hour or a day, and is vital for understanding the intensity and consistency of solar energy available for processes like photosynthesis and optimizing solar panel performance. Both measurements are typically collected using instruments such as pyranometers or silicon photodiode sensors at weather stations, providing insights into the temporal and spatial variations of solar energy, which are essential for planning agricultural activities, analyzing environmental conditions, and assessing solar energy potential throughout the year."
        }
        Ylabel={"Average Solar Radiation (W/m^2)"}
        YlabelTwo={"Total Solar Radiation (MJ/m^2)"}
        VariableOne={"Average Solar Radiation"}
        VariableTwo={"Total Solar Radiation"}
        climateData={climateData}
        XCaption={
          "The chart above shows the solar radiation (average and total) daily at 12:00."
        }
      />
    </div>
  );
};

export default Sensors;
