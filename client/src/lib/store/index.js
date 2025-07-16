import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'
import dashReducer from '../slices/dashSlice'
import userReducer from '../slices/userSlice'
const store = configureStore({
    reducer:{
        auth: authReducer,
        dash: dashReducer,
        user:userReducer
    }
})

export default store;
