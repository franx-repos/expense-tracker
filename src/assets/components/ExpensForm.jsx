import React from "react";

const ExpenseForm = () => {
  return (
    <div>
      <form>
        <div className="">
        <label htmlFor="budget" className="">
          Budget
        </label>
        <input type="text" name="" id="description" className="" />

        <label htmlFor="currency" className="">
          Currency
        </label>
        <select id="category" className=""></select>
        </div>
      </form>
      <form>
        <div>
          <label htmlFor="description" className="">
            Description
          </label>
          <input type="text" name="" id="description" className="" />

          <label htmlFor="amount" className="">
            Amount
          </label>
          <input type="number" name="" id="amount" className="" />

          <label htmlFor="category" className="">
            Category
          </label>
          <select id="category" className=""></select>
          {/*  <option value="">All Categories</option>
                <option value="Groceries">Groceries</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainement</option> */}
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
