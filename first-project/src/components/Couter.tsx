import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
        <div>Count is {count} </div>
        <button onClick={() => setCount((prev) => prev + 1 )}>Increment</button>
        <button onClick={() => setCount((prev) => prev - 1 )}>Decrement</button>
    </>
  )
}

export default Counter