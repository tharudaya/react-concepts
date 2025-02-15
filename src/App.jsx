import { useState } from "react";
import Child1 from "./components/child1";
import Child2 from "./components/child2";


function App() {
  const [isChildChanged, setIsChildChanged] = useState(false);

  const changeChild = () => {
    setIsChildChanged(!isChildChanged)
  }

  return (
    <>
      <h1>Hey I am Parent - SL Frontend Developer</h1>
      <button onClick={changeChild}>Change Component</button>
      {isChildChanged ? <Child1 /> : <Child2 />}
    </>
  )
}

export default App
