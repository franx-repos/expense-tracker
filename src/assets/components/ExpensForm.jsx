import React from "react";
import { useState, useEffect } from "react";

const initialValues = {
  budget: "",
  currency: "",
  description: "",
  price: "",
  category: "",
};

const style = {
  input:
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  label: "block mb-1 mt-3 text-sm font-medium text-gray-300 dark:text-white",
  button:
    "text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};

const ExpenseForm = () => {
  const [itemDetails, setItemDetails] = useState(initialValues);
  const [listItems, setListItems] = useState([]);
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setItemDetails({
      ...itemDetails,
      [name]: value,
    });
  };
  // console.log(itemDetails);
  const handleClick = (e) => {
    e.preventDefault();
    setListItems([...listItems, itemDetails]);
    console.log(listItems);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col">
          <label htmlFor="budget" className={style.label}>
            Budget:
          </label>
          <input
            type="text"
            id="budget"
            className={style.input}
            value={itemDetails.budget}
            name="budget"
            onChange={handleInputChange}
          />
          <label htmlFor="currency" className={style.label}>
            Currency:
          </label>
          <select
            id="category"
            className={style.input}
            onChange={handleInputChange}
            name="currency"
          >
            <option value="$">USA</option>
            <option value="€">Germany</option>
            <option value="Y">Japan</option>
          </select>
          <label htmlFor="description" className={style.label}>
            Description:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className={style.input}
            value={itemDetails.description}
            onChange={handleInputChange}
          />
          <label htmlFor="amount" className={style.label}>
            Price:
          </label>
          <input
            type="number"
            name="price"
            id="amount"
            className={style.input}
            value={itemDetails.price}
            onChange={handleInputChange}
          />

          <label htmlFor="category" className={style.label}>
            Category:
          </label>
          <select
            id="category"
            className={style.input}
            name="category"
            onChange={handleInputChange}
          >
            <option value="">All Categories</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainement</option>
          </select>
        </div>
      </form>
      <button type="submit" onClick={handleClick} className={style.button}>
        new item
      </button>
    </div>
  );
};

export default ExpenseForm;
