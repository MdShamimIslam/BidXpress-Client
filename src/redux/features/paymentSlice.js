import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axios from "axios"; 
import { PAYMENT_URL } from "../../utils/url";

const initialState = {
  checkoutUrl: null,
  isLoading: false,
  error: null,
};

export const createCheckoutSession = createAsyncThunk(
  "payment/createCheckoutSession",
  async (productId, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${PAYMENT_URL}/create-checkout-session`, { productId }, {withCredentials: true} );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    clearCheckoutUrl: (state) => {
      state.checkoutUrl = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCheckoutSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCheckoutSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.checkoutUrl = action.payload.url;
      })
      .addCase(createCheckoutSession.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCheckoutUrl } = paymentSlice.actions;

export default paymentSlice.reducer;
