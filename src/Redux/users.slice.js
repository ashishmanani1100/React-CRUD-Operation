import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", () =>
  axios.get("http://localhost:4000/users").then((response) => response.data)
);

export const setUser = createAsyncThunk("users/setUser", (data) =>
  axios.post("http://localhost:4000/users", data).then((response) => response.data)
);

export const deleteUser = createAsyncThunk("users/deleteUser", (id) =>
  axios.delete(`http://localhost:4000/users/${id}`).then((response) => response.data)
);

export const editUser = createAsyncThunk("users/editUser", (data) =>
  axios.put(`http://localhost:4000/users/${data.id}`, data).then((response) => response.data)
);

const usersSlice = createSlice({
  name: "Users",
  initialState: {
    loading: false,
    usersData: [],
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.usersData = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
      state.error = "failed user get api";
    },
    [setUser.pending]: (state) => {
      state.loading = true;
    },
    [setUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.usersData.push(action.payload);
    },
    [setUser.rejected]: (state) => {
      state.loading = false;
      state.error = "failed user post api";
    },
  },
});

export default usersSlice.reducer;
