import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import feedbackService from "../services/feedbackFeature";
import { toast } from "react-toastify";

const initialState = {
  feedbacks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addFeedback = createAsyncThunk(
    "feedback/addFeedback",
    async (data, thunkAPI) => {
      try {
        const res = await feedbackService.addFeedback(data);
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

export const getFeedbacks = createAsyncThunk(
  "feedback/getFeedbacks",
  async (_, thunkAPI) => {
    try {
      const res = await feedbackService.getFeedbacks();
      return res;
    }
    catch (error) {
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
)

const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // create a new feedback
        .addCase(addFeedback.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
        })
        .addCase(addFeedback.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.feedbacks = action.payload;
          toast.success("Feedback added successfully");
        })
        .addCase(addFeedback.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload);
        })
        // get all feedbacks
        .addCase(getFeedbacks.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
        })
        .addCase(getFeedbacks.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.feedbacks = action.payload;
        })
       .addCase(getFeedbacks.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload);
        });
    },
  });

  export default feedbackSlice.reducer;