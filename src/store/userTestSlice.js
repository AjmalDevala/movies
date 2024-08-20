import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteCookie } from "cookies-next";

// export const GetUserDetail = createAsyncThunk(
//   "getUserDetail",
//   async (body, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const token = localStorage.getItem("token");
//       console.log("from get user", token);
//       if (token) {
//         const res = await axios({
//           headers: { Authorization: Bearer ${token} },
//           url: ${process.env.NEXT_PUBLIC_BASE_API_URL}api/auth/me,
//           method: "GET",
//         });

//         return res.data; // set data to
//       } else {
//         localStorage.clear();
//         deleteCookie("token");
//         deleteCookie("isverified");
//         deleteCookie("socialphonenumber");
//         throw new Error("Unauthorized");
//       }
//     } catch (error) {
//       console.error("error====>", error);
//       return rejectWithValue(error?.message);
//     }
//   }
// );

const userTestSlice = createSlice({
  name: "userProfileId",
  initialState: {
    data: null,
  },
  reducers: {
    sendData: (state, action) => {
      state.data = action.payload;
    },
    clearUserProfile: (state) => {
      state.data = null;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetUserDetail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(GetUserDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(GetUserDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.data = null;
      });
  },
});

export const { sendData, clearUserProfile } = userTestSlice.actions;
export default userTestSlice.reducer;
