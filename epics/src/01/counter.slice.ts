// features/counter/counterSlice.js
import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';


type InitialState = {
    value: number
}

const initialValue: InitialState = {
    value: 0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialValue,
    reducers: {
        setCount: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    }
});

export const CounterActions = {
    ...counterSlice.actions, setAsyncCount: createAction<number>("counter/asyncCount")};

export const CounterReducer = counterSlice.reducer;