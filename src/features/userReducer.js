import axios from "axios"
import { createSlice } from "@reduxjs/toolkit"
export const initialState = {
  loading: false,
  hasErrors: false,
  users: [],
  dialog: false,
  userinfo: null,
  submission: null
}

const userSlice = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    getLoading: (state) => {
      state.loading = true
    },
    getLoadingSuccess: (state, action) => {
      state.users = action.payload
      state.loading = false
      state.hasErrors = false
    },
    getLoadingFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
    addUser: (state, action) => {
      return { users: [...state.users, action.payload] }
    },
    setDialog: (state, action) => {
      state.dialog = action.payload.dialog
      state.userinfo = action.payload.userinfo
    },
    subCheck: (state, action) => {
      state.submission = action.payload
    }
  }
})

export const {
  getLoading,
  getLoadingSuccess,
  getLoadingFailure,
  addUser,
  setDialog,
  subCheck
} = userSlice.actions

export const userReducer = userSlice.reducer

export function userApiCall() {
  return async (dispatch) => {
    dispatch(getLoading())

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      )
      dispatch(getLoadingSuccess(response.data))
    } catch (error) {
      dispatch(getLoadingFailure())
    }
  }
}
