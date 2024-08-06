import {combineEpics, createEpicMiddleware} from "redux-observable";
import {counterEpic} from "../01/counter.epics.ts";
import {combineReducers, configureStore, Middleware} from '@reduxjs/toolkit';
import {CounterReducer} from "../01/counter.slice.ts";
import {postEpics} from "../02/post.epics.ts";

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(counterEpic, postEpics);

const midlewares: Middleware[] = [epicMiddleware];
const store = configureStore({
    reducer: combineReducers({
        counter: CounterReducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(midlewares),
});

epicMiddleware.run(rootEpic);


export type RootState = ReturnType<typeof store.getState>;
export default store;