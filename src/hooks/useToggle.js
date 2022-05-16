import { useState } from 'react'

const useToggle = (initValue = false) => {
    // defining state
    const [flag, setFlag] = useState(initValue);

    // functions
    const toggle  = () => setFlag(!flag)
    return [flag, toggle];
}

export default useToggle