import { useState } from "react";

export default function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    function toggleValue(value) {
        typeof value === 'boolean' ? setValue(value) : setValue(currentValue => !currentValue)
    }

    return [value, toggleValue]
}