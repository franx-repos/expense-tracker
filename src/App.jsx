import ExpenseForm from "./assets/components/ExpensForm";
import ItemList from "./ItemList";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-800 text-gray-300">
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        <ExpenseForm
          currency={""}
          description={""}
          price={""}
          category={""}
          budget={""}
        />

        <ItemList />
      </div>
    </>
  );
}

export default App;
