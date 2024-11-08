import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cart {
  id: number;
  title: string;
  description: string;
  price: number;
}

type SortOrder = "asc" | "desc";

interface CartState {
  carts: cart[];
  sortBy: keyof cart | null;
  sortOrder: SortOrder;
}

const initialState: CartState = {
  carts: [],
  sortBy: null,
  sortOrder: "asc",
};

const sortCartHelper = (
  state: CartState,
  newCart: cart | null,
  sortBy: keyof cart | null,
  sortOrder: SortOrder
) => {
  if (!sortBy) return;

  state.carts.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
};

const sortSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    sortCart: (state, action: PayloadAction<{ sortBy: keyof cart }>) => {
      if (state.sortBy === action.payload.sortBy) {
        state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
      } else {
        state.sortBy = action.payload.sortBy;
        state.sortOrder = "asc";
      }
      sortCartHelper(state, null, state.sortBy, state.sortOrder);
    },
    clearSort:(state,action)=>{
     state.sortOrder=action.payload;
    }
  },
   
});

export const sortAction = sortSlice.actions;
export default sortSlice.reducer;
