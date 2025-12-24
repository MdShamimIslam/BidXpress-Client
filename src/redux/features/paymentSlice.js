import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PAYMENT_URL } from "../../utils/url";

const initialState = {
  clientSecret: null,
  isLoading: false,
};

export const createPaymentIntent = createAsyncThunk(
  "payment/createIntent",
  async (productId) => {
    const res = await axios.post(`${PAYMENT_URL}/create-intent`, {productId}, {withCredentials: true});
    return res?.data;
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentIntent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPaymentIntent.fulfilled, (state, action) => {
        state.clientSecret = action.payload.clientSecret;
        state.isLoading = false;
      })
     .addCase(createPaymentIntent.rejected, (state) => {
        state.isLoading = false;
     })
  },
});

export default paymentSlice.reducer;
