import {fromEvent, map} from "rxjs";

const click$ = fromEvent(document, "keyup").pipe(
    map((event: KeyboardEvent) => {
        return event.key
    })
).subscribe({
    next: (v) => console.log(v)
})
