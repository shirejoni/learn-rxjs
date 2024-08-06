import {Epic, ofType} from "redux-observable";
import {catchError, EMPTY, map, mergeMapTo, switchMap, timer} from "rxjs";
import {AnyAction} from "redux";
import {CounterActions} from "./counter.slice.ts";

export const counterEpic: Epic<AnyAction> = (action$) => {
    return action$.pipe(
        ofType(CounterActions.setAsyncCount.type),
        switchMap((action) => {
            return timer(1000).pipe(
                map(() => CounterActions.setCount(action.payload)),
                catchError(() => EMPTY)
            )
        }),
        mergeMapTo()
    )
}