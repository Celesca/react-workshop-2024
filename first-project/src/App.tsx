import { useState } from 'react';
import './App.css'
import Counter from './components/Couter';
import List from './components/List';
import Login from './components/Login';

function App() {

  const [count, setCount] = useState<number>(0);
  const isLogin: boolean = false;

  if (isLogin) {
    return (
      <>
        <h1>Counter App</h1>
        <Counter setCount={setCount}>Count = {count}</Counter>
        <List items={["Apple", "Banana", "Cherry"]} render={(item) => <div>{item}</div>} />
        <List items={[1, 2, 3]} render={(item) => <div>{item}</div>} />
      </>
    )
  }

  else {
    return (
      <>
        <Login/>
      </>
    )
  }

}

export default App