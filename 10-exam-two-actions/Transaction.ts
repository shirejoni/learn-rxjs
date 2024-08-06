import {map, tap, timer} from "rxjs";

export class Transaction {
    Do() {
        return timer(3000).pipe(
            tap(() => console.log("do transaction")),
            map(() => ({
                balance: Math.random(),
                status: "success"
            }))
        )
    }
}