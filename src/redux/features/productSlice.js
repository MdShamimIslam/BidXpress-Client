import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "../services/productFeature";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  totalPages: 0,    
  currentPage: 1,  
  userProducts: [],
  wonedProducts: [],
  product: null,
  productReviews: [],
  relatedProducts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createProduct = createAsyncThunk(
  "product/create",
  async (data, thunkAPI) => {
    try {
      const res = await productService.createProduct(data);
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

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (params={}, thunkAPI) => {
    try {
      const res = await productService.getAllProduct(params);
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

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, thunkAPI) => {
    try {
      const res = await productService.getProduct(id);
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

export const getAllProductOfUser = createAsyncThunk(
  "product/getAllProductOfUser",
  async (_, thunkAPI) => {
    try {
      const res = await productService.getAllProductOfUser();
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

export const getAllWonedProductOfUser = createAsyncThunk(
  "product/getAllWonedProductOfUser",
  async (_, thunkAPI) => {
    try {
      const res = await productService.getAllWonedProductOfUser();
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

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({id,data}, thunkAPI) => {
    try {
      const res = await productService.updateProduct({id,data});
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

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, thunkAPI) => {
    try {
      const res = await productService.deleteProduct(id);
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

export const updateProductByAdmin = createAsyncThunk(
  "product/updateProductByAdmin",
  async ({id,data}, thunkAPI) => {
    try {
      const res = await productService.updateProductByAdmin({id,data});
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

export const deleteProductByAdmin = createAsyncThunk(
  "product/deleteProductByAdmin",
  async (id, thunkAPI) => {
    try {
      const res = await productService.deleteProductByAdmin(id);
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

export const addProuductReview = createAsyncThunk(
  "product/addProuductReview",
  async ({id, data}, thunkAPI) => {
    try {
      const res = await productService.addProuductReview({id, data});
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

export const getProductReview = createAsyncThunk(
  "product/getProductReview",
  async (id, thunkAPI) => {
    try {
      const res = await productService.getProductReview(id);
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

export const getRelatedProducts = createAsyncThunk(
  "product/getRelatedProducts",
  async (id, thunkAPI) => {
    try {
      const res = await productService.getRelatedProducts(id);
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

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProductState(state) {
      state.isSuccess = false;
      state.isError = false;
    }
  },
  extraReducers: (builder) => {
    builder
      // create a new product
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products.push(action.payload);
        toast.success("Product created successfully!");
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // get all products of user
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages || 0; 
        state.currentPage = action.payload.currentPage || 1;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // get product 
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // get all products of user
      .addCase(getAllProductOfUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProductOfUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userProducts = action.payload;
      })
      .addCase(getAllProductOfUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // get all won products of user
      .addCase(getAllWonedProductOfUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllWonedProductOfUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wonedProducts = action.payload;
      })
      .addCase(getAllWonedProductOfUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // delete product
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("Product deleted successfully");
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error("Failed to delete product");
      })
      // update product
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("Product updated successfully");
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error("Failed to update product");
      })
      // update product by admin
      .addCase(updateProductByAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductByAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success("Product updated successfully");
      })
      .addCase(updateProductByAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error("Failed to update product");
      })
      // delete product by admin
      .addCase(deleteProductByAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductByAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success("Product deleted successfully");
      })
      .addCase(deleteProductByAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error("Failed to delete product");
      })
      // add product review
      .addCase(addProuductReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProuductReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productReviews = action.payload;
        toast.success("Review added successfully");
      })
     .addCase(addProuductReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error("Failed to add review");
      })
      // get product review
      .addCase(getProductReview.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProductReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productReviews = action.payload;
      })
     .addCase(getProductReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error("Failed to load reviews");
      })

      // get related products
     .addCase(getRelatedProducts.pending, (state) => {
        state.isLoading = true;
      })
     .addCase(getRelatedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.relatedProducts = action.payload;
      })
    .addCase(getRelatedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error("Failed to load related products");
      })
  },
});

export const { resetProductState } = productSlice.actions;
export default productSlice.reducer;
export const selectProduct = state => state.product?.product;
