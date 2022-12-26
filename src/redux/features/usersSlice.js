import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  signinUp: false,
  signinIn: false,
  error: null,
  users: null,
  allUsers: null,
  token: localStorage.getItem("token"),
  loading: false,
};

export const registerUser = createAsyncThunk(
  "add/user",
  async (
    { firstName, lastName, login, age, password, phone, role },
    thunkAPI
  ) => {
    try {
      const res = await fetch("http://localhost:4100/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          login,
          age,
          password,
          phone,
          role,
        }),
      });
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: "Ошибка при регистрации:" + error.toString(),
      });
    }
  }
);

export const auth = createAsyncThunk(
  "login/user",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4100/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue({
          error: data.error,
        });
      } else {
        localStorage.setItem("token", data.token);
        return thunkAPI.fulfillWithValue(data.token);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export const getUser = createAsyncThunk("get/user", async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  try {
    const res = await fetch("http://localhost:4100/user", {
      headers: {
        Authorization: `Bearer ${state.user.token}`,
      },
    });
    const user = await res.json();
    if (user.error) {
      return thunkAPI.rejectWithValue({ error: user.error });
    } else {
      return thunkAPI.fulfillWithValue(user);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue({
      error,
    });
  }
});

export const getAllUsers = createAsyncThunk(
  "et/allUsers",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4100/allUsers");
      const users = await res.json();
      return thunkAPI.fulfillWithValue(users);
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error,
      });
    }
  }
);

export const pathAvatar = createAsyncThunk(
  "path/pathAvatar",
  async ({ file }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const formData = new FormData();
      formData.append("avatar", file);

      const res = await fetch("http://localhost:4100/avatar", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
        body: formData,
      });
      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue({ error: data.error });
      } else {
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error,
      });
    }
  }
);

export const saveCorse = createAsyncThunk(
  "save/courses",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch(`http://localhost:4100/saveCourses/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
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

export const deleteCorse = createAsyncThunk(
  "delete/courses",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch(`http://localhost:4100/deleteCourses/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
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

export const addMoney = createAsyncThunk(
  "auth/addMoney",
  async ({ moneyAdd }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const res = await fetch(`http://localhost:4100/addMoney`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${state.user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ money: +moneyAdd }),
      });

      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      } else {
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const entryCourse = createAsyncThunk(
  "entry/course",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const res = await fetch(
        `http://localhost:4100/service/entry/course/${id}/wou`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${state.user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.signUp = false;
        state.error = action.payload.error;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.signUp = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.signUp = false;
        state.error = action.payload.error;
      });
    builder
      .addCase(auth.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(auth.rejected, (state, action) => {
        state.error = action.payload.error;
      });
    builder.addCase(pathAvatar.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
    builder.addCase(saveCorse.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(deleteCorse.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(entryCourse.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder
      .addCase(addMoney.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addMoney.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = action.payload;
      })
      .addCase(addMoney.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsers = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(getAllUsers.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default usersSlice.reducer;
