import React from 'react';
import s from './AnalogClock.module.css'

type AnalogClockProps = {
    date: Date;
}

export const AnalogClock = ({date}: AnalogClockProps) => {

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours() % 12;

    // Вычисление углов для стрелок
    const secondDeg = (seconds / 60) * 360; // каждая секунда = 6 градусов
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6; // минутная стрелка двигается каждую секунду
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30; // часовая стрелка двигается каждые 30 градусов

    return (
        <div className={s.analogClock}>
            <div className={s.analogClockFace}>
                {/* Стрелки */}
                <div className={`${s.hand} ${s.hourHand}`} style={{transform: `rotate(${hourDeg}deg)`}}></div>
                <div className={`${s.hand} ${s.minuteHand}`} style={{transform: `rotate(${minuteDeg}deg)`}}></div>
                <div className={`${s.hand} ${s.secondHand}`} style={{transform: `rotate(${secondDeg}deg)`}}></div>
                {/* Центр */}
                <div className={s.centerCircle}></div>
            </div>
        </div>
    );
};