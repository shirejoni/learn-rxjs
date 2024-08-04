import {buffer, debounceTime, fromEvent, map, scan, tap} from "rxjs";

const click$ = fromEvent(document, 'click')

click$.pipe(
    map(() => 1),
    scan((acc, cur) => acc + cur, 0)
).subscribe((count) => {
    console.log(count + " clicked")
})