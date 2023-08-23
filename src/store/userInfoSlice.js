import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    mbNumber: '22200000',
    name: '탐나는 인재',
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
      const { name, email, role, mbNumber } = action.payload;
      state.name = name;
      state.mbNumber = mbNumber;
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
