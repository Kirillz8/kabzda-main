import React from "react";

type ItemType = {
    title: string
    value: string
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export const Accordion: React.FC<AccordionPropsType> = ({titleValue, collapsed, onChange, items, onClick}) => {
    return (
        <div>
            <AccordionTitle title={titleValue} onChange={onChange}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    )
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = React.memo(({title, onChange}) => {
    return (
        <h3 onClick={onChange}>{title}</h3>
    )
})

const AccordionBody: React.FC<AccordionBodyPropsType> = React.memo(({items, onClick}) => {
    return (
        <ul>
            {items.map(item => <li onClick={()=>{onClick(item.value)}} key={item.value}>{item.title}</li>)}
        </ul>
    )
})