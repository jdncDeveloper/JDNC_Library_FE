import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    username: '탐나는 인재',
    email: 'TAMNa@jdncLibrary.com',
    role: 'user',
  },
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateRole: (state, action) => {
      state.role = action.payload;
    },
    updateUserInfo: (state, action) => {
      const { username, email, role } = action.payload;
      state.username = username;
      state.email = email;
      state.role = role;
    },
  }
});
/**
 * useSelector
 * const { username, email, role } = useSelector(state => state.userInfo);
 */

export const { 
  updateUsername, 
  updateEmail, 
  updateRole, 
  updateUserInfo 
} = userInfoSlice.actions;
export default userInfoSlice.reducer;
