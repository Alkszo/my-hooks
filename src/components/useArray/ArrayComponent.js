import useArray from './useArray';

export default function ArrayComponent() {
    const { array, set, push, filter, update, remove, clear} = useArray([1, 2, 3, 4, 5, 6, 7, 8, 9])

    return(
        <div>
            <div>{array.join(', ')}</div>
            <button onClick={() => set([1,2,3])}>Set to 1,2,3</button>
            <button onClick={() => push(6)}>Add a 6</button>
            <button onClick={() => filter(el => el < 6)}>Filter below 6</button>
            <button onClick={() => update(1, 8)}>change second value to 8</button>
            <button onClick={() => remove(0)}>Remove first position</button>
            <button onClick={() => clear()}>Clear array</button>
        </div>
    )
}