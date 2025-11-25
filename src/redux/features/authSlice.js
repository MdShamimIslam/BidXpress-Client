import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authFeature";
import { toast } from "react-toastify";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  favoriteProducts: [],
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

export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (data, thunkAPI) => {
    try {
     const res = await authService.updateUserProfile(data);
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

export const deleteUserByAdmin = createAsyncThunk(
  "auth/delete-user-by-admin",
  async (id, thunkAPI) => {
    try {
     const res = await authService.deleteUserByAdmin(id);
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

export const addFavouriteProduct = createAsyncThunk(
  "auth/addFavouriteProduct",
  async (productId, thunkAPI) => {
    try {
      return await authService.addFavouriteProduct(productId);
    } catch (error) {
      const message = error.response?.data?.message || error.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getFavouriteProducts = createAsyncThunk(
  "auth/getFavouriteProducts",
  async (_, thunkAPI) => {
    try {
      return await authService.getFavouriteProducts();
    } catch (error) {
      const message = error.response?.data?.message || error.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const removeFavouriteProduct = createAsyncThunk(
  "auth/removeFavouriteProduct",
  async (productId, thunkAPI) => {
    try {
      return await authService.deleteFavouriteProduct(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
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
        toast.success("Logged in successfully!");
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
      .addCase(logout.fulfilled, (state) => {
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
        // TODO
        state.isLoggedIn = false;
        localStorage.removeItem("user");
      })
      // update user profile
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        toast.success("Profile updated successfully!");
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isLoggedIn = true;
        toast.error("Profile updated Failed!");
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
      // delete user by admin
      .addCase(deleteUserByAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserByAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.message = action.payload;
        toast.success("User deleted successfully");
      })
      .addCase(deleteUserByAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isLoggedIn = true;
        toast.error("User failed deleted")
      })
      // // add to favorites product
      .addCase(addFavouriteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFavouriteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = {
          ...state.user,
          favoriteProducts: action.payload.favoriteProducts,
        };
        toast.success("Product added to favorites!");
      })
      .addCase(addFavouriteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload || "This product is already in your favorites!");
      })
      // get favorite products
      .addCase(getFavouriteProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavouriteProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.favoriteProducts = action.payload;
      })
      .addCase(getFavouriteProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // .addCase(addFavouriteProduct.fulfilled, (state, action) => {
      //   state.isSuccess = true;
      //   state.message = action.payload.message; 
      //   toast.success("Product added to favorites!");
      // })
      // .addCase(getFavouriteProducts.fulfilled, (state, action) => {
      //   state.favoriteProducts = action.payload; 
      // });
      // delete favorite Products
      .addCase(removeFavouriteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFavouriteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.favoriteProducts = state.favoriteProducts.filter(
          (product) => product._id !== action.meta.arg
        );
      })
      .addCase(removeFavouriteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
      
  },
});

export default authSlice.reducer;
export const { RESET } = authSlice.actions;


