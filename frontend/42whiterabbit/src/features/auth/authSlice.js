import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  authInfo: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get token
export const getToken = createAsyncThunk(
  "auth/getToken",
  async (code, thunkAPI) => {
    try {
      return await authService.getToken(code);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.authInfo = null;
    },
    resetSuccess: (state) => {
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.authInfo = action.payload;
      })
      .addCase(getToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.authInfo = null;
        
      });
  },
});

export const { reset, resetSuccess } = authSlice.actions;
export default authSlice.reducer;
