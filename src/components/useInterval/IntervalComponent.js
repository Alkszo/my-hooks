import { useState } from "react";
import useInterval from "./useInterval";

export default function IntervalComponent() {
    const [count, setCount] = useState(0)
    const { clear, set } = useInterval(() => {
        setCount(num => num +1)
    }, 1000)

    return(
        <div>
            <div>{count}</div>
            <button onClick={clear}>Stop the count!</button>
            <button onClick={set}>Resume the count!</button>
        </div>
    )
}