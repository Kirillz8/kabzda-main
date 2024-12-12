import {RatingValueType} from "../../App";
import React from "react";


type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}


export function Rating({value, onClick}: RatingPropsType) {
    return (
        <div>
            <Star selected={value > 0} onClick={onClick} value={1}/>
            <Star selected={value > 1} onClick={onClick} value={2}/>
            <Star selected={value > 2} onClick={onClick} value={3}/>
            <Star selected={value > 3} onClick={onClick} value={4}/>
            <Star selected={value > 4} onClick={onClick} value={5}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

const Star: React.FC<StarPropsType> = React.memo(({selected, onClick, value}) => {
    return <span onClick={() => onClick(value)}>{selected ? <b>star </b> : "star "}</span>
})