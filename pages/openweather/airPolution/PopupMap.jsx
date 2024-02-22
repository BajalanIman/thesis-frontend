import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
//
import MarkerClusterGroup from "react-leaflet-cluster";
import Brandenburgboundary from "../../../data/Brandenburgboundary.jsx";
import OpenweatherSt from "./OpenweatherSt.jsx";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App";
import { useContext, useState } from "react";
import axios from "axios";
import StationsInfo from "../../../data/Locations.jsx";

const PopupMap = (props) => {
  const { onClose, open, openWeaterLat, openWeaterLon, customWidth } = props;

  //   console.log(openWeaterLat, openWeaterLon);

  const position = [52.52, 12.805];
  const Brandenburgboundaries = Brandenburgboundary;
  const stationInformation = StationsInfo;
  const limeColor = { color: "darkGreen" };
  const redColor = { color: "darkBlue" };

  let { language } = useContext(CartContext);

  const [latInMap, setLatInMap] = useState(52.52);
  const [lngInMap, setLngInMap] = useState(13.405);
  const [cityName, setCityName] = useState("");
  return (
    <div style={{ width: customWidth }}>
      <Dialog onClose={onClose} open={open}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "green",
            justifyItems: "between",
            justifyContent: "space-between",
            alignItems: "center",
            height: "66px",
          }}
        >
          <DialogTitle sx={{ fontWeight: "bold" }}>
            Location of the station on the map
          </DialogTitle>

          <CloseIcon sx={{ marginRight: "20px" }} onClick={onClose} />
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={true}
            style={{
              width: 700,
              height: 800,
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polygon
              pathOptions={limeColor}
              positions={Brandenburgboundaries}
            />
            {/* 
            <MarkerClusterGroup
              onMouseOver={(e) => {
                const { lat, lng } = e.latlng;
                setLatInMap(lat);
                setLngInMap(lng);
                axios
                  .get(
                    `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=5&appid=992c20977dbb20bd9b6b36c9a376dc7c`
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
                  <OpenweatherSt
                    key={el.id}
                    name={el.name}
                    stlocation={el.location}
                    panorama={el.panorama}
                    infoOne={el.infoOne}
                    infoTwo={el.infoTwo}
                    infoThree={el.infoThree}
                    openWeaterLoc={[openWeaterLat, openWeaterLon]}
                  ></OpenweatherSt>
                );
              })}
            </MarkerClusterGroup> */}
            <Marker
              position={[openWeaterLat, openWeaterLon]}
              pathOptions={redColor}
            ></Marker>
            <CircleMarker
              center={[openWeaterLat, openWeaterLon]}
              pathOptions={"#ff0000"}
              radius={20}
              fillOpacity={0.3}
              fillColor="rgb(16,94,251)"
            ></CircleMarker>
          </MapContainer>
        </Box>
      </Dialog>
    </div>
  );
};

export default PopupMap;
