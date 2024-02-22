import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface User {
  id: number
  name: string
  color: string
}

const initialState: User[] = []

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.push(action.payload)
    },
    removeUser(state, action: PayloadAction<number>) {
      return state.filter((user) => user.id !== action.payload)
    },
    updateUser(
      state,
      action: PayloadAction<{ id: number; newData: { position: string } }>
    ) {
      const { id, newData } = action.payload
      const userIndex = state.findIndex((user) => user.id === id)
      if (userIndex !== -1) {
        state[userIndex] = { ...state[userIndex], ...newData }
      }
    },
  },
})

export const { addUser, removeUser, updateUser } = usersSlice.actions
export default usersSlice.reducer

export const selectUsers = (state: RootState) => state.users
