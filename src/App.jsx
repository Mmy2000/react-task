import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar on the left with fixed width */}
      <div className="flex-shrink-0 w-64">
        <Sidebar />
      </div>

      {/* Main content area with remaining width */}
      <div className="flex-grow">
        {/* Your main content goes here */}
        <Navbar />
        <Content/>
      </div>
    </div>
  );
}

export default App
