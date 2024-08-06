import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {CounterActions} from "./counter.slice.ts";


export const Counter: React.FC = () => {
    const count = useSelector<RootState>((state) => state.counter.value)
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(CounterActions.setAsyncCount(count + 1))
    }

    return <div>
        <h1>Count: {count}</h1>
        <button onClick={handleOnClick}>click</button>
    </div>
}