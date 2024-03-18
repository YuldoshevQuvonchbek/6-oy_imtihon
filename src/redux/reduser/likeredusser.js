import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/store";
export const initialState = loadState("like") || {
  itemLike: [],
  countLike: 0,
};

const like = createSlice({
  name: "like",
  initialState,
  reducers: {
    likeAddItem: (state, action) => {
      const idf = state.itemLike.find((item) => item.id === action.payload.id);
      if (!idf) {
        return {
          ...state,
          itemLike: [...state.itemLike, { ...action.payload }],
        };
      }
      return state;
    },
    removiLIkeitem: (state, action) => {
      return {
        ...state,
        itemLike: state.itemLike.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    likeCount: (state) => {
      return { ...state, likeCount: state.itemLike.length };
    },
  },
});
export const likeredusser = like.reducer;
export const { removiLIkeitem, likeCount, likeAddItem } = like.actions;
