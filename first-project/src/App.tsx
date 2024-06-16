import { useState } from 'react';
import './App.css'
import Counter from './components/Couter';

function App() {

  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Counter App</h1>
      <Counter setCount={setCount}>Count = {count}</Counter>
    </>
  )
}

export default App
