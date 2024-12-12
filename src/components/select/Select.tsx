import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void;
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const onItemClick = (value: string) => {
        props.onChange(value)
        setActive(!active)
    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }

        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            props.onChange(hoveredElementValue)
            setActive(false)
        }
    }


    return (
        <div className={styles.select} tabIndex={0} onKeyDown={onKeyUp}>

            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>

            {active &&
                <div className={styles.items}>
                    {props.items.map((item, index) => {

                        return (
                            <div
                                className={`${styles.item} ${hoveredItem === item && styles.selected}`}
                                key={index}
                                onClick={() => onItemClick(item.value)}
                                onMouseEnter={() => setHoveredElementValue(item.value)}
                            >
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}