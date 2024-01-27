import React, { useState, useEffect } from "react";
import axios from "axios";

const ImportFromAPI = () => {
  const [dataFromAPI, setDataFromAPI] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl =
        "https://logstar-online.de/api/c73b3c88-441a-4b3e-a06b-b5fde1cb2d55/buche/2022-09-12/2022-09-14";

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Cookie:
              "XSRF-TOKEN=eyJpdiI6ImFRalV5dmFhRVBOR2xLM2t3MU5qNlE9PSIsInZhbHVlIjoiUWtQMjJHMitpT09wQlV4eGhjcWhBSTl6ZmtMMVBwUEl3M3pLaUNPQVpNd2J2ZTFySHBpSnVHd2VaQk1EYXUrWFl0UXAzMlRwczAybG9OWFwvY0lYVVMzM2hrRVpsR2VpakdHVTllOERBcEcwMzJaOUNOUVBPeitzU3JBVU9zFjFzIiwibWFjIjoiMjUwMjA0NDZlNDRmZWNlZGEyYTZlODI5MzA3Y2YzMGY0Y2VmMTQ5ZjlmNjA2ZjQ7N1Y4MjIzNWExMGFjMzI4MjFlMzNlMzNhZjU3NjU1ZDdiYzVhOTVjMzNhYjJkZTYwZTkwOWQyYzg3NDZkODkxIn0%3D",
          },
        });
        setDataFromAPI(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Initial data fetch
    fetchData();

    // Set up a timer to fetch data every 24 hours
    const intervalId = setInterval(fetchData, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  //  useEffect(() => {
  //    const apiUrl =
  //      "https://logstar-online.de/api/c73b3c88-441a-4b3e-a06b-b5fde1cb2d55/buche/2022-09-12/2022-09-14";
  //
  //    axios
  //      .get(apiUrl, {
  //        headers: {
  //          Cookie:
  //            "XSRF-TOKEN=eyJpdiI6ImFRalV5dmFhRVBOR2xLM2t3MU5qNlE9PSIsInZhbHVlIjoiUWtQMjJHMitpT09wQlV4eGhjcWhBSTl6ZmtMMVBwUEl3M3pLaUNPQVpNd2J2ZTFySHBpSnVHd2VaQk1EYXUrWFl0UXAzMlRwczAybG9OWFwvY0lYVVMzM2hrRVpsR2VpakdHVTllOERBcEcwMzJaOUNOUVBPeitzU3JBVU9zFjFzIiwibWFjIjoiMjUwMjA0NDZlNDRmZWNlZGEyYTZlODI5MzA3Y2YzMGY0Y2VmMTQ5ZjlmNjA2ZjQ3MWI3OWY0ZGExYWZkNzExYiJ9; laravel_session=eyJpdiI6IjlhcEkxOFF3XC9XSWlCb2dRM3lrVXpRPT0iLCJ2YWx1ZSI6Ijk0cUZcLzlGUEFjempKWUlHbnBoYm5QUkFpTWluMWY5T3Arb0FTNDNhYW5rEXBKZkpRZWRkUXRwSXlpWkg3Rlg4QlRSOHpvTWcxdktweU84OTBYbCtTY2VxS0s3N0kwZUJKNnRCSUtcL2lsV0hBZklBZVRsK0t0VXNzaTBOYnJCenUiLCJtYWMiOiJkODg0YjQzZmI2YzUyMWVkMDMxZmQ1MmE8ZjNiYTc2NGY2YjE5ODkxODExYTQxM2Y5YTIyM2NkYWEzYTdiZTU0In0%3D",
  //        },
  //      })
  //      .then((response) => {
  //        setDataFromAPI(response.data.data);
  //      })
  //      .catch((error) => {
  //        console.error(error);
  //      });
  //  }, []);
  //{console.log(dataFromAPI[64].k1)}
  //{dataFromAPI.map((el) => console.log(el.k19))}
  return (
    <div>
      <p className="bg-red-400 mt-5">
        The below data comes from the API for Buche station!!
      </p>
      {dataFromAPI &&
        dataFromAPI.map((el, index) => (
          <div
            key={index}
            className="bg-yellow-300 flex justify-start text-xs "
          >
            <p className="w-44">dateTime: {el.dateTime}</p>
            <p className="w-20 bg-yellow-100">k1: {el.k1}</p>
            <p className="w-20 bg-yellow-100">k2: {el.k2}</p>
            <p className="w-20 bg-yellow-100">k3: {el.k3}</p>
            <p className="w-20 bg-yellow-100">k4: {el.k4}</p>
            <p className="w-20 bg-yellow-100">k5: {el.k5}</p>
            <p className="w-20 bg-yellow-100">k6: {el.k6}</p>
            <p className="w-20 bg-yellow-100">k7: {el.k7}</p>
            <p className="w-20 bg-yellow-100">k8: {el.k8}</p>
            <p className="w-20 bg-yellow-100">k9: {el.k9}</p>
            <p className="w-20 bg-yellow-100">k10: {el.k10}</p>
            <p className="w-20 bg-yellow-100">k11: {el.k11}</p>
            <p className="w-20 bg-yellow-100">k12: {el.k12}</p>
            <p className="w-20 bg-yellow-100">k13: {el.k13}</p>
            <p className="w-20 bg-yellow-100">k14: {el.k14}</p>
            <p className="w-20 bg-yellow-100">k15: {el.k15}</p>
            <p className="w-20 bg-yellow-100">k16: {el.k16}</p>
            <p className="w-20 bg-yellow-100">k17: {el.k17}</p>
            <p className="w-20 bg-yellow-100">k18: {el.k18}</p>
            <p className="w-20 bg-yellow-100">k19: {el.k19}</p>
            <p className="w-20 bg-yellow-100">k20: {el.k20}</p>
            <p className="w-20 bg-yellow-100">k21: {el.k21}</p>
            <p className="w-20 bg-yellow-100">k22: {el.k22}</p>
            <p className="w-20 bg-yellow-100">k23: {el.k23}</p>
            <p className="w-20 bg-yellow-100">k24: {el.k24}</p>
            <p className="w-20 bg-yellow-100">k25: {el.k25}</p>
          </div>
        ))}
      <p>er</p>
    </div>
  );
};

export default ImportFromAPI;
