import react, { useState, useEffect } from "react";
import axios from "axios";

const FetchPrice = ({ city_name, country_name }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: "https://cost-of-living-and-prices.p.rapidapi.com/prices",
          params: {
            city_name: city_name,
            country_name: country_name,
          },
          headers: {
            "X-RapidAPI-Key":
              "649d027c1dmsh2f67a6b657491f4p1ba1d9jsnd6e045b6753b",
            "X-RapidAPI-Host": "cost-of-living-and-prices.p.rapidapi.com",
          },
        });
        // console.log(response);
        console.log(response.data.prices);
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, []);

  return <div>FetchPrice</div>;
};

export default FetchPrice;
