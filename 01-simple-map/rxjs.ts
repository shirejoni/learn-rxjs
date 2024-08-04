import {filter, from, map} from "rxjs"

const numbers$ = from([1, 2, 3, 4, 5])
numbers$.pipe(
    map((item) => item * 2),
    filter((item) => item > 5),
).subscribe((item) => console.log(item))