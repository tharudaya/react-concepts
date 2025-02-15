import { useEffect, useState } from "react";

function Child1() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("child 1 mounted");
    }, []);

    useEffect(() => {
        console.log("child 1 updated with count ", count);
    }, [count]);

    useEffect(() => {
        return () => {
            console.log("child 1 unmounted!");
        };
    }, []);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h2>child1</h2>
            <button onClick={handleClick}>Update</button>
        </>
    )
}

export default Child1;
