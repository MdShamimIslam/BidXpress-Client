import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authFeature";
import { toast } from "react-toastify";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  users: [],
  income: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoggedIn: false,
  message: ""
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const res = await authService.register(userData);
      localStorage.setItem("user", JSON.stringify(res));
      return res;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        error;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const res = await authService.login(userData);
      localStorage.setItem("user", JSON.stringify(res));
      return res;
    } catch (error) {
      toast.error(error.response.data.message);
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        error;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
     const res = await authService.logout();
      localStorage.removeItem("user");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return res;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        error;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getLogInStatus = createAsyncThunk(
  "auth/status",
  async (_, thunkAPI) => {
    try {
     const res = await authService.getLogInStatus();
     return res;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        error;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "auth/userprofile",
  async (_, thunkAPI) => {
    try {
     const res = await authService.getUserProfile();
     return res;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        error;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const loginUserAsSeller = createAsyncThunk(
  "auth/login-as-seller",
  async (userData, thunkAPI) => {
    try {
     const res = await authService.loginUserAsSeller(userData);
     localStorage.setItem("user", JSON.stringify(res));
     return res;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        error;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getUserIncome = createAsyncThunk(
  "auth/user-income",
  async (_, thunkAPI) => {
    try {
     const res = await authService.getUserIncome();
     return res;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        error;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getIncome = createAsyncThunk(
  "auth/income",
  async (_, thunkAPI) => {
    try {
     const res = await authService.getIncome();
     return res;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        error;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getAllUser = createAsyncThunk(
  "auth/all-user",
  async (_, thunkAPI) => {
    try {
     const res = await authService.getAllUser();
     return res;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        error;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
    // register the user
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      // login the user
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Login Failed";
        state.user = null;
      })
      // logout the user
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false; 
        state.user = null;
        toast.success("Logged out successfully!");
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      // get login statue of the user
      .addCase(getLogInStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLogInStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = action.payload;
      })
      .addCase(getLogInStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // get user profile
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isLoggedIn = true;
        localStorage.removeItem("user");
      })
      // login as a seller
      .addCase(loginUserAsSeller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserAsSeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isError = false;
        toast.success("Logged in as a seller successfully!");
      })
      .addCase(loginUserAsSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.error(action.payload);
      })
      // get user income
      .addCase(getUserIncome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserIncome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.income = action.payload;
      })
      .addCase(getUserIncome.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isLoggedIn = true;
      })
      // get income for admin
      .addCase(getIncome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIncome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.income = action.payload;
      })
      .addCase(getIncome.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isLoggedIn = true;
      })
      // get all users
      .addCase(getAllUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.users = action.payload;
        state.totalUsers = action.payload?.length;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isLoggedIn = true;
      })
  },
});

export default authSlice.reducer;
export const { RESET } = authSlice.actions;


