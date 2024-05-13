import { useState } from "react";
import FetchPrice from "./components/FetchPrice";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <input type="text" />
      <FetchPrice city_name={"Berlin"} country_name={"Germany"}></FetchPrice>
    </>
  );
}

export default App;
