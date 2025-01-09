import { useState } from 'react';
import classes from  './App.module.scss';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increase = () => setCount(prev => prev + 1)
  
  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={increase}>Inc</button>
    </div>
  )
}
