import React, { useEffect, useState } from "react";
import axios from "axios";

const ExpenseForm = () => {
  const [data, setData] = useState([]);
  const [expenseInput, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [cityName, setCityName] = useState("London");
  const [countryName, setCountryName] = useState("United Kingdom");
  const [currency, setCurrency] = useState("");

  const countryCurrency = {
    EUR: ["France", "Germany"],

    USD: ["United States of America"],

    JPY: ["Japan"],

    GBP: ["United Kongdom", "UK"],
  };

  const countryCity = {
    Germany: ["Berlin"],
  };

  const getData = async () => {
    try {
      const response = await axios.request({
        method: "GET",
        url: "https://cost-of-living-and-prices.p.rapidapi.com/prices",
        params: {
          city_name: cityName,
          country_name: countryName,
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
    if (filtered_data.length == 1) {
      console.log(
        `The price is ${filtered_data[0].avg} ${filtered_data[0].currency_code}`
      );
      setPrice(filtered_data[0].avg);
      setCategory(filtered_data[0].category_name);
      // console.log(filtered_data[0].avg);
    } else {
      console.log("no Entries found please Input a price");
    }
  }, [data]);

  useEffect(() => {
    `The price is ${price}`;
  }, [price]);

  useEffect(() => {
    getData();
  }, [expenseInput]);

  return (
    <div>
      <form>
        <div className="">
          <label htmlFor="budget" className="">
            Budget
          </label>
          <input type="text" name="" id="budget" className="" />

          <label htmlFor="currency" className="">
            Currency
          </label>
          <select
            id="currency"
            className=""
            onChange={(e) => setCurrency(e.target.value)}
          ></select>
          <label htmlFor="city" className="">
            City
          </label>
          <input
            type="text"
            id="city"
            className=""
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
      </form>
      <form>
        <div>
          <label htmlFor="description" className="">
            Description
          </label>
          <input
            type="text"
            name=""
            id="description"
            className=""
            onKeyDown={onEnter}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="amount" className="">
            Amount
          </label>
          <input
            type="number"
            name=""
            id="amount"
            className=""
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />

          <label htmlFor="category" className="">
            Category
          </label>
          <input
            type="text"
            name=""
            id="category"
            className=""
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
