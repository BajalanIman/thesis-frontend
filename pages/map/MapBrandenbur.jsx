import MarkerClusterGroup from "react-leaflet-cluster";
import Brandenburgboundary from "../../data/Brandenburgboundary.jsx";
import StationsLocation from "./StationsLocation.jsx";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { localize } from "../../Translation.jsx";
import { CartContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import StationsInfo from "../../data/Locations";
import TextInBody from "../panorama/TextInBody.jsx";
import { Box, Typography } from "@mui/material";

const MapBrandenbur = () => {
  const position = [52.52, 13.405];
  const Brandenburgboundaries = Brandenburgboundary;
  const stationInformation = StationsInfo;
  const limeColor = { color: "darkGreen" };

  let { language } = useContext(CartContext);

  const [latInMap, setLatInMap] = useState(52.52);
  const [lngInMap, setLngInMap] = useState(13.405);
  const [cityName, setCityName] = useState("");

  //opnAirPollution
  // const [data, setData] = useState([]);
  // const getData = async () => {
  //   const { data } = await axios.get(
  //     `http://api.openweathermap.org/data/2.5/air_pollution?lat=30.489772&lon=-99.771335&appid=ae1f24cd90993757247d8601739d2cf8`
  //   );
  //   setData(data);
  // };

  // useEffect(() => {
  //   getData();
  //   console.log(JSON.stringify(data));
  // }, []);

  //

  const titleStyle = {
    justifyContent: "center",
    // width: {
    //   xs: "400px",
    //   sm: "450px",
    //   md: "600px",
    //   lg: "1000px",
    //   xl: "1400px",
    // },
    paddingY: "1%",
    fontWeight: "bold",
  };
  const paragraphStyle = {
    // width: {
    //   xs: "400px",
    //   sm: "450px",
    //   md: "600px",
    //   lg: "1000px",
    //   xl: "1400px",
    // },

    fontWeight: "normal",
    paddingTop: "44px",
    font: "Arial",
  };
  const titleInParagraphStyle = {
    ...paragraphStyle,
    paddingTop: "50px",
    paddingBottom: "12px",
    fontWeight: "bold",
  };

  const paragraphStyleTwo = {
    ...paragraphStyle,
    paddingY: "6px",
  };

  const informations = [
    localize(language, "AppFeaturOne"),
    localize(language, "AppFeaturTwo"),
    localize(language, "AppFeaturThree"),
    localize(language, "AppFeaturFour"),
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        paddingTop: 3,
        paddingBottom: 5,
        paddingX: 3,
      }}
    >
      <TextInBody
        text={localize(language, "WelcomeText")}
        titleStyle={titleStyle}
      ></TextInBody>
      <Box
        sx={{
          width: {
            xs: "400px",
            sm: "450px",
            md: "600px",
            lg: "1000px",
            xl: "1400px",
          },
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={true}
          style={{
            width: "100%",
            height: 750,
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polygon pathOptions={limeColor} positions={Brandenburgboundaries} />

          <MarkerClusterGroup
            autoPan:true
            onMouseOver={(e) => {
              const { lat, lng } = e.latlng;
              setLatInMap(lat);
              setLngInMap(lng);
              axios
                .get(
                  `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=5&appid=992c20977dbb20bd9b6b36c9a376dc7c`
                )
                .then((res) => {
                  if (res.data && res.data.length > 0) {
                    const firstLocation = res.data[0];
                    setCityName(firstLocation.name);
                    e.propagatedFrom
                      .bindTooltip(` ${firstLocation.name}`)
                      .openTooltip();
                  }
                })
                .catch((error) => {
                  console.error("Error fetching data:", error);
                });
            }}
            onMouseOut={(e) => {
              e.propagatedFrom.unbindTooltip();
            }}
            chunkedLoading
          >
            {stationInformation.map((el) => {
              return (
                <StationsLocation
                  key={el.id}
                  name={el.name}
                  stlocation={el.location}
                  panorama={el.panorama}
                  infoOne={el.infoOne}
                  infoTwo={el.infoTwo}
                  infoThree={el.infoThree}
                ></StationsLocation>
              );
            })}
          </MarkerClusterGroup>
        </MapContainer>
        <TextInBody
          variant={`h6`}
          text={localize(language, "InfoHomePage")}
          titleStyle={paragraphStyle}
        ></TextInBody>
        <TextInBody
          variant={`h6`}
          text={localize(language, "KeyFeatures")}
          titleStyle={titleInParagraphStyle}
        ></TextInBody>

        {informations.map((e, index) => (
          <TextInBody
            variant={`h6`}
            key={index}
            text={e}
            titleStyle={paragraphStyleTwo}
          ></TextInBody>
        ))}

        {/* <p>{localize(language, "AppCreator")}</p> */}
      </Box>
    </Box>
  );
};

export default MapBrandenbur;
