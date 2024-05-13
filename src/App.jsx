import { useState } from "react";
import FetchPrice from "./components/FetchPrice";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // const addExpense = () => {
  //   if (expenseInput.trim() !== "") {
  //     console.log("Add expense");

  //     setInput("");
  //   } else {
  //     console.log("Ixnput is empty");
  //   }
  // };

  return (
    <>
      <FetchPrice city_name={"Berlin"} country_name={"Germany"}></FetchPrice>
    </>
  );
}

export default App;
