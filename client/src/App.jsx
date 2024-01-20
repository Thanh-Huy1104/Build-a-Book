import { useEffect, useState } from 'react'
import { getHelloWorld } from './api/api.service'

function App() {
  const [HelloWorld, setHelloWorld] = useState('')

  useEffect(() => {
    getHelloWorld().then((data) => {
      setHelloWorld(data.message)
      })
  }
  , [])
  
  return (
    <div className="flex flex-col items-stretch pt-12 bg-green-50">
     
    </div>
  )
}

export default App
