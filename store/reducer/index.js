import { createSlice } from "@reduxjs/toolkit";

const nikeSlice = createSlice({
  name: "nike",
  initialState: {
    productItem: [],
  },
  reducers: {
    addItemTocart(state, action) {
      const item = [...state.productItem];
      const itemIndex = item.findIndex((i) => i.id === action.payload.id);

      if (itemIndex < 0) {
        let tempProduct = { ...action.payload, quantity: 1 };
        item.push(tempProduct);
      } else {
        const updateItem = { ...item[itemIndex] };
        updateItem.quantity++;
        item[itemIndex] = updateItem;
      }
      console.log(state.productItem);
      return {
        ...state,
        productItem: item,
      };
    },
    removeItemcart(state, action) {
      const item = [...state.productItem];
      const itemIndex = item.findIndex((i) => i.id === action.payload.id);
      const updateItem = { ...item[itemIndex] };

      if (updateItem.quantity === 1) {
        const filterItem = item.filter((i) => i.id !== action.payload.id);
        return { ...state, productItem: filterItem };
      } else {
        updateItem.quantity--;
        item[itemIndex] = updateItem;
      }

      return {
        ...state,
        productItem: item,
      };
    },
  },
});

export const { addItemTocart, removeItemcart } = nikeSlice.actions;

export default nikeSlice.reducer;
