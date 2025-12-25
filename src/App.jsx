import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Devices from './pages/Devices/Devices'
import My from './pages/My/My'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='main-page'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/my" element={<My />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
