import react, { useState, useEffect } from "react";
import axios from "axios";

const FetchPrice = ({ city_name, country_name }) => {
  const [data, setData] = useState([]);
  const [expenseInput, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
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
      // console.log(response.data.prices);
      setData(response.data.prices);
    } catch (error) {
      console.log(error);
    }
  };

  function onEnter(e) {
    if (e.key === "Enter") {
      //compare value to fetched data
      setInput(e.target.value);
    }
  }

  useEffect(() => {
    console.log(data);

    const filtered_data = data.filter(function (entry) {
      return entry.item_name.includes(expenseInput);
    });
    console.log(filtered_data);
    if (filtered_data.length > 0) {
      console.log(
        `The price is ${filtered_data[0].avg} ${filtered_data[0].currency_code}`
      );
      // console.log(filtered_data[0].avg);
    } else {
      console.log("no Entries found please Input a price");
    }
  }, [data]);

  useEffect(() => {
    getData();
  }, [expenseInput]);

  return (
    <div>
      <input type="text" onKeyDown={onEnter} />
    </div>
  );
};

export default FetchPrice;
