import useToggle from './useToggle'

export default function ToggleComponent() {
    const [value, toggleValue] = useToggle(false)

    return(
        <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>True</button>
            <button onClick={() => toggleValue(false)}>False</button>
        </div>
    )
}