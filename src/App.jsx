import { useState } from 'react'
import './App.css'
import Register from './Registration/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-page'>
        <Register />
      </div>
    </>
  )
}

export default App
