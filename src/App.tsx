import React, { useState } from "react";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import ShoppingListForm from "./components/ShoppingListForm";
import { v4 } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    console.log("made it to the app component");
    setItems([...items, { id: v4(), product: product, quantity: quantity }]);
  };
  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   {
  //     id: 2,
  //     product: "Chicken Breast",
  //     quantity: 2,
  //   },
  // ];
  return (
    <div className="App">
      <Greeter person="Josh" />
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
