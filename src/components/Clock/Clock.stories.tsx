import React, {useState} from 'react';
import {Clock} from './Clock';

export default {
    title: 'Clock',
    component: Clock,
}


export const BaseExample = () => {

    return <Clock mode={'analog'}/>
};

export const BaseExample2 = () => {

    return <Clock mode={'digital'}/>
};