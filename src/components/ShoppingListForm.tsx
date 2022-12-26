import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (product: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const numberInputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProductName: string = productInputRef.current!.value;
    const newProductQuantity: number = parseInt(numberInputRef.current!.value);
    onAddItem(newProductName, newProductQuantity);
    productInputRef.current!.value = "";
    numberInputRef.current!.value = "0";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="product name" ref={productInputRef} />
      <input
        type="number"
        min={0}
        placeholder="product quantity"
        ref={numberInputRef}
      />
      <button type="submit">Add item</button>
    </form>
  );
}

export default ShoppingListForm;
