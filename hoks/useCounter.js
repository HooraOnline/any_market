import { useState } from 'react'

const useCounter = (initValue = 0) => {
    // defining state
    const [count, setCount] = useState(initValue);

    // functions
    const add = () => setCount(count + 1)
    const subtract = () => setCount(count - 1)

    return { count, add, subtract };
}

export default useCounter