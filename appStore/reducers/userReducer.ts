import { createSlice } from '@reduxjs/toolkit';
import User from '../../models/user';
import { plans } from '../../utils/constants';

export interface UserStore {
    isLoggedIn: boolean,
    user: User
    plan: Plan
    paymentMethods: PaymentMethod[]
}

const initialState: UserStore = {
    isLoggedIn: false,
    user: {
        firstname: 'Dumelang',
        lastname: 'Moraki',
        status: 'active',
        no: '0001-00',
        plan: 'PLAN C'
    },
    plan: plans[2],
    paymentMethods: []
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
        },
        SET_PLAN: (state, action) => {
            state.plan = action.payload
        },
        SET_PAYMENTMETHODS: (state, action) => {
            state.paymentMethods = action.payload
        }
    },
});

// export const selectModal = (state: RootState) => state.mainModal;

export const {SET_IS_LOGGED_IN, SET_USER, SET_PLAN, SET_PAYMENTMETHODS } = userStore.actions;

export default userStore.reducer;
