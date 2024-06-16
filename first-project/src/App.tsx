import { useState } from 'react';
import './App.css'
import Counter from './components/Couter';
import List from './components/List';

function App() {

  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Counter App</h1>
      <Counter setCount={setCount}>Count = {count}</Counter>
      <List items={["Apple", "Banana", "Cherry"]} render={(item) => <div>{item}</div>} />
    </>
  )
}

export default App
