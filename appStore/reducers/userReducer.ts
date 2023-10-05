import { createSlice } from '@reduxjs/toolkit';

export interface UserStore {
    isLoggedIn: boolean
}

const initialState: UserStore = {
    isLoggedIn: false
};

export const userStore = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SET_IS_LOGGED_IN: (state, action) => {
            state.isLoggedIn = action.payload
        }
    },
});

// export const selectModal = (state: RootState) => state.mainModal;

export const {SET_IS_LOGGED_IN } = userStore.actions;

export default userStore.reducer;
