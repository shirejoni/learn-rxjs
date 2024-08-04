import {of, interval, timer, take} from "rxjs"

const source$ =of(1, 2, 3, 4, 5)
const timer$ = timer(0, 1000).pipe(
    take(4)
)

source$.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.error(err),
    complete: () => console.log("complete")
})

// timer$.subscribe({
//     next: (value) => console.log(value),
//     error: (err) => console.error(err),
//     complete: () => console.log("timer complete")
// })


// const myfunction = () => {
//     return {
//         subscribe: () => {
//             console.log("started")
//         }
//     }
// }
//
// const m= myfunction();
// m.subscribe();