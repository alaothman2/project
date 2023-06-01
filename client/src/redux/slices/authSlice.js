import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  isLoding: false,
  isError: false,
  isSuccess: false,
  isLogin: false,
  userUpdated : false,
  userRole: "",
  message: "",
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:4000/user/register", {
        username: user.username,
        email: user.email,
        password: user.password,
        Phone : user.phone
      });
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:4000/user/login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getUser = createAsyncThunk(
  "auth/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`http://localhost:4000/user/profile`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const updateUser = createAsyncThunk("auth/UpdateUser",
async (user, { rejectWithValue }) => {
  try {
    const res = await axios.put(`http://localhost:4000/user/update-profil/${user.id}`, {
      username: user.username,
      email: user.email,
      password: user.password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data.message);
  }
})
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.isLoding = false;
      state.isSuccess = false;
      state.isError = false;
      state.token = null;
      state.user = null;
      state.isLogin = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        return {
          ...state,
          isLoding: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: false,
          isSuccess: true,
          user: action.payload.user,
          token: action.payload.token,
          userRole: action.payload.user.role,
          message: "",
        };
      })
      .addCase(registerUser.rejected, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: true,
          isSuccess: false,
          message: action.payload,
        };
      })
      .addCase(loginUser.pending, (state) => {
        return {
          ...state,
          isLoding: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: false,
          isSuccess: true,
          isLogin: true,
          user: action.payload.user,
          token: action.payload.token,
          userRole: action.payload.user.role,
          message: "",
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: true,
          isSuccess: false,
          message: action.payload,
        };
      })
      .addCase(getUser.pending, (state, action) => {
        return {
          ...state,
          isLoding: true,
          isError: false,
          isSuccess: false,
          message: "",
        };
      })
      .addCase(getUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: false,
          isSuccess: true,
          isLogin: true,
          user: action.payload,
        };
      })
      .addCase(getUser.rejected, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: true,
          isSuccess: false,
          message: action.payload,
        };
      })
      .addCase(updateUser.pending, (state, action) => {
        return {
          ...state,
          isLoding: true,
          userUpdated : false,
          message: "",
        };
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: false,
          userUpdated : true,
          
        };
      })
      .addCase(updateUser.rejected, (state, action) => {
        return {
          ...state,
          isLoding: false,
          isError: true,
          userUpdated : false,
          message: action.payload,
        };
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
