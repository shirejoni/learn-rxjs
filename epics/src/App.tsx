import './App.css'
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import {Counter} from "./01/Counter.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <Link to="/counter">01 Counter</Link>
        </div>,
    },
    {
        path: "/counter",
        element: <Counter />,
    }
]);

function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
