import React from "react";

const ExpenseForm = () => {
  return (
    <div className="bg-blue-900 p-4"> 
      <div className="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6">
        <form className="flex flex-wrap"> 
          <div className="flex flex-col w-full sm:flex-row sm:items-center sm:mr-6"> 
            <div className="mb-4 sm:mb-0 sm:mr-6 w-full sm:w-auto"> 
              <label htmlFor="budget">Budget</label>
              <input type="text" id="budget" className="border border-gray-400 w-full" />
            </div>
            <div className="mb-4 sm:mb-0 sm:mr-6 w-full sm:w-auto"> 
              <label htmlFor="currency">Currency</label>
              <select id="currency" className="border border-gray-400 w-full"></select>
            </div>
            <div className="w-full sm:w-auto"> 
              <label htmlFor="city">City</label>
              <input type="text" id="city" className="border border-gray-400 w-full" />
            </div>
          </div>
          <div className="flex flex-col w-full"> 
            <div className="flex space-x-6 w-full"> 
              <div className="flex flex-col w-full sm:w-auto"> 
                <label htmlFor="description">Description</label>
                <input type="text" id="description" className="border border-gray-400 w-full" />
              </div>
              <div className="flex flex-col w-full sm:w-auto"> 
                <label htmlFor="price">Price</label>
                <input type="number" id="price" className="border border-gray-400 w-full" />
              </div>
              <div className="flex flex-col w-full sm:w-auto"> 
                <label htmlFor="category">Category</label>
                <select id="category" className="border border-gray-400 w-full"></select>
                {/* Uncomment and adjust options as needed */}
                {/* <option value="">All Categories</option>
                <option value="Groceries">Groceries</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainement</option> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;

