import { useState } from 'react';

export default function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue)

    function push(element) {
        setArray(arr => [...arr, element])
    }

    function filter(callback) {
        setArray(arr => arr.filter(callback))
    }

    function update(index, newElement) {
        if(array.length < index + 1) {
            return
        }
        setArray(arr => [
            ...arr.slice(0, index),
            newElement,
            ...arr.slice(index + 1),
        ])
    }

    function remove(index) {
        setArray(arr => [
            ...arr.slice(0, index),
            ...arr.slice(index + 1)
        ])
    }

    function clear() {
        setArray([])
    }

    return { array, set: setArray, push, filter, update, remove, clear}
}