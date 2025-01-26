import { useState } from 'react'
import { Card } from './components/Card'
import { Header } from './components/Header'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="md:px-8 px-2">
      <Card title="Annie" description={{text: "Best coder ever", show: true}} />
      <Card title="Cynthia" description={{text: "is learning to code", show: false}} />
      <Header />
    </div>
  )
}

export default App

