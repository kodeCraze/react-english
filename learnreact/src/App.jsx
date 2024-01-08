import {useState} from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  const Reset = () => {
    setCount(0)
  }
  const increment = () => {
    setCount(count + 1)
    console.log(count)
  }

  const decriment = () => {
    setCount(count - 1)
    console.log(count)
  }
  return (
    <>
    <h1>React Counter By Dev X</h1>
      <h2>Click Button</h2>
      <button onClick={increment}>+</button>
      <h3>{count}</h3>
      <button onClick={decriment}>-</button>
      <p><button onClick={Reset}>Reset</button></p>
    </>
  );
}

export default App
