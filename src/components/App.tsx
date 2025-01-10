import { useState } from 'react';
import classes from  './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increase = () => setCount(prev => prev + 1)
  
  return (
    <div>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <br />
      <h1>{count}</h1>
      <button className={classes.btn} onClick={increase}>Inc</button>
      <Outlet/>
    </div>
  )
}
