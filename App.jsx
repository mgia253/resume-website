import { useState } from 'react'
import Header from './Header.jsx';
import ResumeContent from './ResumeContent.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Header />
      <ResumeContent />
      </div>
    </>
  )
}

export default App
