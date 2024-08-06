import {map, timer} from "rxjs";

export class Transaction {
    Do() {
        return timer(3000).pipe(
            map(() => ({
                balance: Math.random(),
                status: "success"
            }))
        )
    }
}