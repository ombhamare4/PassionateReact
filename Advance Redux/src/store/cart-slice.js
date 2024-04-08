import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        // So then we wanna go to our state items and push a new item. And that would be absolutely bad if you're using just Redux
        // because push manipulates the existing array in the existing state.
        // And that's a must not do, but with Redux Toolkit, as emphasized before, we don't have that problem
        // because their Redux Toolkit internally ensures that this will not manipulate the existing state
        // but that it instead transforms this into an operation which updates the state in an immutable way.
        // So we can use push here when working with Redux Toolkit.
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        //Donot do with legacy redux but you can do with Redux Toolkit
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        console.log(existingItem);
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
