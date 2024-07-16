import { configureStore } from "@reduxjs/toolkit";

const authStore = configureStore({
    name: 'auth',
    reducer:{
        initialState: {loggedIn: false},
        reducers:{
            login: (state, action)=>{
                state.loggedIn = true;
            },
            logout: (state, action)=>{
                state.loggedIn = false;
            }

        }

    }
})