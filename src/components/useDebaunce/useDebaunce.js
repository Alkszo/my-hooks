import { useEffect } from "react";
import useTimeout from "../useTimeout/useTimeout";

export default function useDebaunce(callback, delay, dependencies) {
    const {reset, clear } = useTimeout(callback, delay)
    useEffect(reset, [...dependencies, reset])
    useEffect(clear, [])
}

//needs useTimeout