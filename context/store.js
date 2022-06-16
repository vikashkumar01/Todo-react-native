import { configureStore } from "@reduxjs/toolkit"
import { userReducer, getTodosReducer } from "./reducers/userReducers"


const store = configureStore({
    reducer: {
        user: userReducer,
        getTodos: getTodosReducer,

    },
})

export default store;