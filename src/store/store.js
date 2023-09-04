import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './userInfoSlice';
import dateSelectReducer from './dateSelectSlice';
import dateRecordReducer from './dateRecordSlice';

export default configureStore({
  reducer: {
    userInfo: userInfoReducer,
    dateSelect: dateSelectReducer,
    dateRecord: dateRecordReducer,
  },
});
