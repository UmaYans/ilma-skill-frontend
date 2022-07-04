import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  servic: {},
  teacherService: null,
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

export const postServiceByTeacher = createAsyncThunk(
  "post/serv",
  async (
    { name, description, photo, price, format, time, catId },
    thunkAPI
  ) => {
    const state = thunkAPI.getState();
    try {
      const res = await fetch("/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.user.token}`,
        },
        body: JSON.stringify({
          name,
          description,
          photo,
          price,
          format,
          time,
          catId,
        }),
      });
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

export const getServiceTeacher = createAsyncThunk(
  "get/serviceTeacher",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const res = await fetch(`/teacherService`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
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
      });
    builder
      .addCase(getServiceTeacher.fulfilled, (state, action) => {
        state.teacherService = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getServiceTeacher.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getServiceTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});
export default serviceSlice.reducer;
