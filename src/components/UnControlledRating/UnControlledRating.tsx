import React, {useState} from "react";
import {RatingValueType} from "../../App";

type StarPropsType = {selected: boolean, setValue: () => void}
type RatingPropsType = {defaultValue: RatingValueType, onChange: (value: RatingValueType)=> void}

export function UnControlledRating({defaultValue, onChange}: RatingPropsType) {

    const [value, setValue] = useState<number>(defaultValue ? defaultValue : 0)

    return (
        <div className="Stars">
            <Star selected={value >= 1} setValue={()=>{setValue(1); onChange(1)}} />
            <Star selected={value >= 2} setValue={()=>{setValue(2); onChange(2)}} />
            <Star selected={value >= 3} setValue={()=>{setValue(3); onChange(3)}} />
            <Star selected={value >= 4} setValue={()=>{setValue(4); onChange(4)}} />
            <Star selected={value >= 5} setValue={()=>{setValue(5); onChange(5)}} />
        </div>
    )
}

const Star: React.FC<StarPropsType> = React.memo(({selected, setValue}: StarPropsType) => {
    return <span onClick={setValue}>{selected ? <b>star </b> : "star"}</span>
})