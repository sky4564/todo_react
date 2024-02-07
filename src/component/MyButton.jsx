// import { useState } from "react"



function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick} style={{ display: "block" }}>this is counting Number {count}</button>
    )
}

export default MyButton