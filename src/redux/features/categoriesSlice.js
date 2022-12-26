import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const getCategories = createAsyncThunk(
  "get/categories",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4100/category");
      const category = await res.json();
      return thunkAPI.fulfillWithValue(category);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(getCategories.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default categoriesSlice.reducer;
