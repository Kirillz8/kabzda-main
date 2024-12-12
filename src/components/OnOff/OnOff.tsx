import React from "react";

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff: React.FC<OnOffPropsType> = ({on, onChange}) => {


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
        marginBottom: "2px"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    }

    return (
        <div>
            <button onClick={()=>onChange(true)} style={onStyle}>ON</button>
            <button onClick={()=>onChange(false)} style={offStyle}>OFF</button>
            <div style={indicatorStyle}/>
        </div>
    );
};

