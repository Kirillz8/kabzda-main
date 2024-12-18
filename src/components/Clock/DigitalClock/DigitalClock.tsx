import React from 'react';
import s from './DigitalClock.module.css';

type AnalogClockProps = {
    date: Date;
}
export const get2DigitsString = (num: number) => num < 10 ? `0${num}` : num

export const DigitalClock = ({date}: AnalogClockProps) => {
    return (
        <div className={s.container}>
            <span className={s.digit}>{get2DigitsString(date.getHours())}</span>
            :
            <span className={s.digit}>{get2DigitsString(date.getMinutes())}</span>
            :
            <span className={s.digit}>{get2DigitsString(date.getSeconds())}</span>
        </div>
    );
};