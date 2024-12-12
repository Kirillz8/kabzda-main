import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "input",
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const getValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <><input onChange={getValue}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const ref = useRef<HTMLInputElement>(null)
    const saveValue = () => {
        const el = ref.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <>
            <input ref={ref}/>
            <button onClick={saveValue}>save</button>
            - actual value: {value}
        </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <>
        <input value={parentValue} onChange={onChangeValue}/> {parentValue}
    </>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return <>
        <input checked={parentValue} type='checkbox' onChange={onChange}/>
    </>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Kislovodsk</option>
        <option value="2">Cherkessk</option>
        <option value="3">Krasnoyarsk</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value="it-incubator"/>