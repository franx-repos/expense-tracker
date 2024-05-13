import { useState } from "react";
import "./App.css";
import ItemList from "./ItemList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <ItemList />
    </>
  );
}

export default App;
