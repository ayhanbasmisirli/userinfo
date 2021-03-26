import axios from "axios"
import { createSlice } from "@reduxjs/toolkit"
export const initialState = {
  loading: false,
  hasErrors: false,
  users: []
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
    }
  }
})

export const {
  getLoading,
  getLoadingSuccess,
  getLoadingFailure,
  addUser
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

// export function userApiPost(data) {
//   return async (dispatch) => {
//     dispatch(getLoading())

//     try {
//       //   console.log("emmi", data)
//       const response = await axios.post(
//         `https://jsonplaceholder.typicode.com/users`,
//         {
//           data
//         }
//       )
//       dispatch(getLoadingSuccess(response.data))
//     } catch (error) {
//       dispatch(getLoadingFailure())
//     }
//   }
// }
