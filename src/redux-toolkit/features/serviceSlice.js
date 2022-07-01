import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  servic: {},
  error: null,
  loading: false,
};

export const getService = createAsyncThunk(
  "get/service",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/service");
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getServiceById = createAsyncThunk(
  "get/serviceById",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`/service/one/${id}`);
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
        state.error = null;
      })
      .addCase(getService.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        console.log(action);
      });
    builder
      .addCase(getServiceById.fulfilled, (state, action) => {
        state.loading = false;
        state.servic = action.payload;
        state.error = null;
      })
      .addCase(getServiceById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        console.log(action);
      });
  },
});
export default serviceSlice.reducer;
