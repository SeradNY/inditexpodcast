import { configureStore } from '@reduxjs/toolkit';
import { podcastReducer } from "./reducers/podcastReducer"

export default configureStore({
    reducer: {
        podcastReducer: podcastReducer,
    },
})