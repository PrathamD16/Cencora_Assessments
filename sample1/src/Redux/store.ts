import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserReducer/UserSlice'

const store = configureStore({
    reducer: {
        userreducer: UserReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>