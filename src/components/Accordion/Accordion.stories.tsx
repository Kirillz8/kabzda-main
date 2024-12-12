import {action} from "@storybook/addon-actions"

import {Accordion} from "./Accordion";
import React, {useState} from "react";

export default {
    component: Accordion
}

const callback = action('onChange')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => {
    return <Accordion
        titleValue="Collapsed Accordion"
        collapsed={true}
        onChange={callback}
        items={[{title: 'Ansar', value: '1'}, {title: 'Karim', value: '2'}, {title: 'Ayna', value: '3'}]}
        onClick={onClickCallback}
    />
}

export const UsersUnCollapsedMode =  () =>{
    return <Accordion
        titleValue="Opened Accordion"
        collapsed={false}
        onChange={() => {
        }}
        items={[{title: 'Ansar', value: '1'}, {title: 'Karim', value: '2'}, {title: 'Ayna', value: '3'}]}
        onClick={onClickCallback}
    />

}

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion
        titleValue="Accordion"
        collapsed={collapsed}
        onChange={() => setCollapsed(!collapsed)}
        items={[{title: 'Ansar', value: '1'}, {title: 'Karim', value: '2'}, {title: 'Ayna', value: '3'}]}
        onClick={value => alert(`user with ID ${value} should be happy!`)}
    />
}