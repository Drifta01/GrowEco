"use client";

import { CartItem, useCart } from "@/context/cartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const addItemToCart = () => {
    const newItem: CartItem = {
      id: "1",
      name: "Sample Item",
      price: 10,
      quantity: 1,
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const removeItemFromCart = (id: string) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id, name: "", price: 0, quantity: 0 },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={addItemToCart}>Add Item</button>
      <button onClick={clearCart}>Clear Cart</button>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
