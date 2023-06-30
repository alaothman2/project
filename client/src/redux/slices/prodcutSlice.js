import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  token: localStorage.getItem("token") || null,
  product: null,
  products : [],
  isLoding: false,
  isError: false,
  isSuccess: false,
  ProductUpdated: false,
  message: "",
};
const apiUrl = "http://localhost:4000";
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ( productUpdated, { rejectWithValue }) => {
    console.log(productUpdated.id.id)
    try {
      const res = await axios.put(
        `${apiUrl}/product/update-product/${productUpdated.id.id}`,
        productUpdated,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${apiUrl}/product/add-product`, product, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      console.log(res.data)
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (products,{rejectWithValue}) => {
    try {
      const res = await axios.get(`${apiUrl}/product/products`);
      return res.data;
      
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProduct.pending, (state) => {
        return {
          ...state,
          isLoding: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: false,
          isSuccess: true,
          ProductUpdated: true,
          product: action.payload,
        };
      })
      .addCase(updateProduct.rejected, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: true,
          message: action.payload,
        };
      })
      .addCase(addProduct.pending, (state) => {
        return {
          ...state,
          isLoding: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: false,
          isSuccess: true,
          message: action.payload.message,
          product: action.payload.product,
        };
      })
      .addCase(addProduct.rejected, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: true,
          message: action.payload,
        };
      })
      .addCase(fetchProducts.pending, (state) => {
        return {
          ...state,
          isLoding: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: false,
          isSuccess: true,
          products: action.payload,
        };
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: true,
          message: action.payload,
        };
      });
  },
});
export default ProductSlice.reducer;
