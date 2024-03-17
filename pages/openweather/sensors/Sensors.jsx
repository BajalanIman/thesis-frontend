import SensorsLinechartMulti from "./SensorsLinechartMulti";
import SensorsLinechartMultiTwoY from "./SensorsLinechartMultiTwoY.jsx";

import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App";
import React, { useContext } from "react";

const Sensors = () => {
  let { language } = useContext(CartContext);

  return (
    <div className="mt-16 h-full mb-28 flex-cols gap-4">
      <SensorsLinechartMultiTwoY
        title={"Soilxxx"}
        paragraph={localize(language, "soilDifferentDeepxxx")}
      />
      <SensorsLinechartMulti
        title={"Soil"}
        paragraph={localize(language, "soilDifferentDeep")}
      />
      <SensorsLinechartMulti
        title={"Water"}
        paragraph={localize(language, "waterDifferentDeep")}
      />
    </div>
  );
};

export default Sensors;
