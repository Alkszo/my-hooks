import { useState } from "react";
import useTimeout from "./useTimeout";

export default function TimeoutComponent() {
    const [count, setCount] = useState(100)
    const { clear, reset } = useTimeout(() => setCount(0), 2500)

    return(
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(num => num + 1)}>Increment</button>
            <button onClick={clear}>Clear Timeout</button>
            <button onClick={reset}>Reset Timeout</button>
        </div>
    )
}