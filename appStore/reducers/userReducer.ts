import { createSlice } from '@reduxjs/toolkit';
import User from '../../models/user';

export interface UserStore {
    isLoggedIn: boolean,
    user: User 
}

const initialState: UserStore = {
    isLoggedIn: false,
    user: {
        firstname: 'Dumelang',
        lastname: 'Moraki',
        status: 'active',
        no: '0001-00',
        plan: 'PLAN C'
    }
};

export const userStore = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SET_IS_LOGGED_IN: (state, action) => {
            state.isLoggedIn = action.payload
        },
        SET_USER: (state, action) => {
            state.user = action.payload
        }
    },
});

// export const selectModal = (state: RootState) => state.mainModal;

export const {SET_IS_LOGGED_IN, SET_USER } = userStore.actions;

export default userStore.reducer;
