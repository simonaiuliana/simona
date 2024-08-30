import { useState } from "react";

function Button({ message, children }) {
    const [count, setCount] = useState(0);
    const callback = (e)=>{
        e.preventDefault(); 
        alert(message);
        setCount((count)=>++count);
    }
    return (
    <>
        <button style={{backgroundColor: "green", color:"white"}} onClick={callback}>{children}: {count}</button>
        <button style={{backgroundColor: "blue", color:"white"}} onClick={callback}>{children}: {count}</button>
    </>
    );
  }

export default Button

