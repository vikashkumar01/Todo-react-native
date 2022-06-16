import { createReducer } from '@reduxjs/toolkit'

const initialState = {}


export const userReducer = createReducer(initialState, {
    LoginRequest: (state) => {
        state.loading = true;
    },
    LoginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoginFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

    RegisterRequest: (state) => {
        state.loading = true;
    },
    RegisterSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    RegisterFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

    LoadUserRequest: (state) => {
        state.loading = true;
    },
    LoadUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoadUserfailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

    LogoutUserRequest: (state) => {
        state.loading = true;
      },
      LogoutUserSuccess: (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      },
      LogoutUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
      },


    AddTaskRequest: (state) => {
        state.loading = true;
    },
    AddTaskSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
    },
    AddTaskFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    DeleteTaskRequest: (state) => {
        state.loading = true;
    },
    DeleteTaskSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    DeleteTaskFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

  
    SingleTaskRequest: (state) => {
        state.loading = true;
    },
    SingleTaskSuccess: (state, action) => {
        state.loading = false;
        state.todo = action.payload;
    },
    SingleTaskFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },



    clearError: (state) => {
        state.error = null;
    },


});


export const getTodosReducer = createReducer(initialState, {

    GetTaskRequest: (state) => {
        state.loading = true;
    },
    GetTaskSuccess: (state, action) => {
        state.loading = false;
        state.todos = action.payload;
    },
    GetTaskFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
   },
    clearError: (state) => {
        state.error = null;
    },

});

