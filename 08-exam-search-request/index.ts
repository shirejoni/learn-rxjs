// http://localhost:3000/api/search?q=${query}
import {debounceTime, from, fromEvent, map, switchMap, tap} from "rxjs";

export interface City {
    id: number;
    name: string;
    description: string;
}



// const resultsElement = document.getElementById("results")

// input$.subscribe({
//     next: (value) => {
//         resultsElement.innerHTML = ""
//
//         value.forEach((city) => {
//             const div = document.createElement("div")
//             div.innerHTML = `
//                 <h1>City: ${city.name}</h1>
//                 <p>${city.description}</p>
//             `
//             resultsElement.appendChild(div)
//         })
//     },
//     error: (err) => console.error(err),
//     complete: () => console.log("complete")
// })