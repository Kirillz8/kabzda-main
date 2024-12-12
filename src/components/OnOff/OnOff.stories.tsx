import {OnOff} from "./OnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    component: OnOff
}

export const On = () => <OnOff on={true} onChange={action('clicked')}/>
export const Off = () => <OnOff on={false} onChange={action('clicked')}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} onChange={setValue}/>
}