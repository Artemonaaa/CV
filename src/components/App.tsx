import React, { useState } from 'react'

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increase = () => setCount(prev => prev + 1)
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Inc</button>
    </div>
  )
}
