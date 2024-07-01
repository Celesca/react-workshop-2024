import React, { ReactElement } from "react"

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>
    children?: React.ReactNode
}

const Counter = ({setCount, children} : CounterProps) : ReactElement => {

  return (
    <>
        <div>{children}</div>
        <button onClick={() => setCount((prev) => prev + 1 )}>Increment</button>
        <button onClick={() => setCount((prev) => prev - 1 )}>Decrement</button>
    </>
  )
}

export default Counter