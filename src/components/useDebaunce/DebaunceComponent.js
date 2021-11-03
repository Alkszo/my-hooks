import { useState } from "react";
import useDebaunce from "./useDebaunce";

export default function DebaunceComponent() {
    const [count, setCount] = useState(13)
    useDebaunce(() => alert(count), 1000, [count])

    return (
        <div>
         <div>{count}</div>
         <button onClick={() => setCount(oldC => oldC + 1)}>Increase</button>
        </div>

    )
}