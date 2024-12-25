import React, {useEffect, useState} from 'react';
import {AnalogClock} from './AnalogClock/AnalogClock';
import {DigitalClock} from './DigitalClock/DigitalClock';
import {FormControlLabel, Switch} from '@mui/material';
import s from './Clock.module.css';

export type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())
    const [showDigital, setShowDigital] = useState<boolean>(true)

    useEffect(() => {

        const inetrvalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(inetrvalID) // очистка таймера при размонтировании
        }
    }, []);

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowDigital(event.target.checked);
    };

    return (
        <div className={s.container}>
            <div className={s.clock}>
                {props.mode === 'digital' && showDigital ? <DigitalClock date={date}/> : <AnalogClock date={date}/>}
            </div>

            <FormControlLabel
                className={s.switch}
                value="bottom"
                control={<Switch color="primary" checked={showDigital} onChange={handleSwitchChange}/>}
                label={props.mode === 'digital' && showDigital ? 'Цифровые часы' : 'Аналоговые часы'}
                labelPlacement="bottom"
            />

        </div>
    );
};