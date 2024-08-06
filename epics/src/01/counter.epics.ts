import {Epic} from "redux-observable";
import {EMPTY} from "rxjs";
import {AnyAction} from "redux";

export const counterEpic: Epic<AnyAction> = () => {
    return EMPTY
}