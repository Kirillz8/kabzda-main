import {ItemType, Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: 'Select',
    component: Select
}

const callback = action('Value changed: ')

const cities: ItemType[] = [
    {title: 'Kislovodsk', value: '1'},
    {title: 'Moscow', value: '2'},
    {title: 'Cherkessk', value: '3'},
    {title: 'Istanbul', value: '4'},
]

export const WithValue = () => {
    const [value, setValue] = useState<string>('2')

    const changeCity = (value: string) => {
        setValue(value)
    }

    return <Select items={cities} value={value} onChange={changeCity}/>
}

export const WithoutValue = () => {
    const [value, setValue] = useState<string | null>(null)

    const changeCity = (value: string) => {
        setValue(value)
    }

    return <Select items={cities} onChange={changeCity} value={value}/>
}


