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

function cloneOf<T>(...inputs: T[]) {
    return {
        subscribe: (observer: Observer<T>) => {
            for (let i = 0; i < inputs.length; i++) {
                observer.next(inputs[i])
            }
            observer.complete();
        }
    }
}

const source$ = cloneOf(1, 2, 3, 4, 5)


source$.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.error(err),
    complete: () => console.log("complete")
})
//
// function cloneOf<T>(...inputs: T[])  {
//     return {
//         subscribe: (observer: Observer<T>) => {
//             for(let i = 0; i < inputs.length; i++) {
//                 observer.next(inputs[i])
//             }
//             observer.complete();
//         }
//     }
// }
//
// const source$ = cloneOf(1, 2, 3, 4)
//


