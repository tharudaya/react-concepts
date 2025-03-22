/* eslint-disable react/prop-types */
import { useState } from "react";

function Child1() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={handleClick}>update</button>
        </div>
    )
}

export default Child1;
