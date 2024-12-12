import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo',
}

export const SimpleExample1 = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    });

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, []);

    useEffect(() => {
        console.log('useEffect first ender and every counter change')
        document.title = counter.toString()
    }, [counter]);

    return (
        <>
            Hello, {counter}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
    )
}

// export const SetTimeoutExample = () => {
//
//     const [fake, setFake] = useState(1)
//     const [counter, setCounter] = useState(1)
//
//     console.log('setTimeoutExample')
//
//     useEffect(() => {
//
//         // setTimeout(() => {
//         //     document.title = counter.toString()
//         // }, 1000)
//
//         setInterval(() => {
//             console.log('tick: ' + counter)
//             setCounter((state) => state + 1)
//         }, 1000)
//     }, []);
//
//     return (
//         <>
//             Hello, counter: {counter} - fake: {fake}
//             {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
//             {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
//         </>
//     )
// }


export const SetDateExample = () => {

    const [curTime, setCurTime] = useState(new Date())

    console.log('setTimeoutExample')

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurTime(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, []);

    return (
        <>
            <h1>
                {curTime.toLocaleTimeString()}
            </h1>
        </>
    )
}
