import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  token: "",
  favoriteSongs: [],
}

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
})

export default userInfoSlice.reducer