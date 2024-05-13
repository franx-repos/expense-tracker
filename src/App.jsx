import { useState } from "react";
import "./App.css";

import ExpenseForm from "./assets/components/ExpensForm";
import ItemList from "./ItemList";


function App() {
 

  return (
    
    <>
    {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <ExpenseForm/>
      
      <ItemList />
    </>
  );
}

export default App;
