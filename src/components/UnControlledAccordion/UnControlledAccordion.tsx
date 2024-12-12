import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type UnControlledAccordionPropsType = {
    titleValue: string
}

type UnControlledAccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function UnControlledAccordion({titleValue}: UnControlledAccordionPropsType) {
    const [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            <AccordionTitle title={titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {state.collapsed && <AccordionBody/>}
        </div>
    )
}

const AccordionTitle: React.FC<UnControlledAccordionTitlePropsType> = React.memo(({title, onClick}) => {
    return <h3 onClick={onClick}>{title}</h3>
})

const AccordionBody: React.FC = React.memo(() => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
})