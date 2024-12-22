/* eslint-disable react-refresh/only-export-components */
import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../feature/UserSlice';

export default configureStore({
    reducer: {
        user: useReducer,
    },
});