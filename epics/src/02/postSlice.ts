// features/counter/counterSlice.js
import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';


type InitialState = {
    loading: boolean;
    title: string;
}

const initialValue: InitialState = {
    loading: false,
    title: ""
}
export const postSlice = createSlice({
    name: 'counter',
    initialState: initialValue,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
    }
});

export const PostActions = {
    ...postSlice.actions
};

export const PostReducer = postSlice.reducer;