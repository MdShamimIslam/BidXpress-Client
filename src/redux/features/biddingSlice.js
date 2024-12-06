import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import biddingService from "../services/biddingFeature";
import { toast } from "react-toastify";

const initialState = {
  history: [],
  bidding: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const placebid = createAsyncThunk(
    "bid/placebid",
    async (data, thunkAPI) => {
      try {
        const res = await biddingService.placebid(data);
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

export const getBiddingHistory = createAsyncThunk(
    "bid/getBiddingHistory",
    async (productId, thunkAPI) => {
      try {
        const res = await biddingService.getBiddingHistory(productId);
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

export const sellProductByUser = createAsyncThunk(
    "bid/sellProductByUser",
    async (productId, thunkAPI) => {
      try {
        const res = await biddingService.sellProductByUser(productId);
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

const biddingSlice = createSlice({
    name: "bidding",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // create a new bidding
        .addCase(placebid.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(placebid.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.bidding = action.payload;
          toast.success("Apply success");
        })
        .addCase(placebid.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
        // get bidding history
        .addCase(getBiddingHistory.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getBiddingHistory.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.history = action.payload;
        })
        .addCase(getBiddingHistory.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
        // sell product by user
        .addCase(sellProductByUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(sellProductByUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload;
        })
        .addCase(sellProductByUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
    },
  });

  export default biddingSlice.reducer;