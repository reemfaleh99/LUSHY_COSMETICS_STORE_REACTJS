import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favItems: localStorage.getItem("favItems")
    ? JSON.parse(localStorage.getItem("favItems"))
    : [],
  totalQuantity: localStorage.getItem("totalQuantity")
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0,
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.favItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItem >= 0) {
        state.favItems = state.favItems?.filter(
          (item) => item.id !== newItem.id
        );

        state.totalQuantity--;
      } else {
        state.favItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
        });

        state.totalQuantity++;
      }

      localStorage.setItem("favItems", JSON.stringify(state.favItems));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },

    deleteItem: (state, action) => {
      state.favItems = state.favItems?.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalQuantity--;

      localStorage.setItem("favItems", JSON.stringify(state.favItems));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },
  },
});

export const favAction = favSlice.actions;

export default favSlice.reducer;
