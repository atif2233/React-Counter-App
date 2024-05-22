import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const addValue = () => {
    if (count < 100) {
      setCount(prevCount => prevCount + 1);
    } else {
      setIsDisabled(true);
    }
  };

  const decreaseValue = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const resetValue = () => {
    setCount(0);
    setIsDisabled(false);
  };

  return (
    <>
      <h1>Let's create a basic number counting app</h1>
      <button disabled={isDisabled} onClick={addValue}>Increase Value ({count})</button>
      <button onClick={resetValue}>Reset Value</button>
      <button disabled={isDisabled} onClick={decreaseValue}>Decrease Value ({count})</button>
    </>
  );
}

export default App
