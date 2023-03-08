import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counterSlice';
import { counterReducer } from "./reducers/counterReducer"

export default configureStore({
    reducer: {
        counterReducer: counterReducer,
    },
})