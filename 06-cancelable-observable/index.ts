import {of, interval, timer, take, retry} from "rxjs"

// const source$ = of(1, 2, 3, 4, 5)


// function cloneOf(...inputs: number[]) {
//     for(let i = 0; i < inputs.length; i++) {
// observer.notify(inputs[i])
// }
// observer.complete();
// }

interface Observer<T> {
    next: (value: T) => void;
    error: (err: any) => void;
    complete: () => void;
}

function clonseInterval(timer: number) {
    return {
        subscribe: (observer: Observer<number>) => {
            let i = 1;
            const interval = setInterval(() => {
                observer.next(i++)
            }, timer)
            return {
                unsubscribe: () => {
                    clearInterval(interval)
                    observer.complete();
                }
            }
        }
    }
}
//
// const source$ = cloneOf(1, 2, 3, 4, 5)
//

// const source$ = interval(1000)
const source$ = clonseInterval(1000)

const subscription = source$.subscribe({
    next: (value) => console.log("interval", value),
    error: (err) => console.error(err),
    complete: () => console.log("complete")
})


setTimeout(() => {
    subscription.unsubscribe();
}, 5000)

