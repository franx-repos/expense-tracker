import React from "react";
import { useState, useEffect } from "react";

const initialValues = {
  currency: "",
  description: "",
  price: "",
  category: "",
  budget: "",
};
const ExpenseForm = () => {
  const [itemDetails, setItemDetails] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setItemDetails({
      ...itemDetails,
      [name]: value,
    });
  };
  console.log(itemDetails);
  return (
    <div>
      <form>
        <div className="">
          <label htmlFor="budget" className="">
            Budget:
          </label>
          <input
            type="text"
            id="budget"
            className=""
            value={itemDetails.budget}
            name="budget"
            onChange={handleInputChange}
          />

          <label htmlFor="currency" className="">
            Currency:
          </label>
          <select
            id="category"
            className=""
            onChange={handleInputChange}
            name="currency"
          >
            <option value="$">USA</option>
            <option value="€">Germany</option>
            <option value="Y">Japan</option>
          </select>
        </div>
      </form>
      <form>
        <div>
          <label htmlFor="description" className="">
            Description:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className=""
            value={itemDetails.description}
            onChange={handleInputChange}
          />

          <label htmlFor="amount" className="">
            Price:
          </label>
          <input
            type="number"
            name="price"
            id="amount"
            className=""
            value={itemDetails.price}
            onChange={handleInputChange}
          />

          <label htmlFor="category" className="">
            Category:
          </label>
          <select id="category" className="" name="category"></select>
          <option value="">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainement</option>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
