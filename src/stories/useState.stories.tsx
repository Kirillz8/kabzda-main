import React, {useState} from 'react';

export default {
    title: 'useState demo',
}

function generateData() {
    // mean that we have difficult operation for counting
    return 0
}

export const Example1 = () => {
    // const initialValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    return (
        <>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </>
    )
}