import React from "react"



// 01 fetch data and display loading
// 02 cancel request
// 03 error display alert
export const Post: React.FC = () => {

    const handleOnClick = () => {
    }

    return <div>
        <h1>Title: </h1>
        <button onClick={handleOnClick}>click</button>
        <button>cancel</button>
    </div>
}