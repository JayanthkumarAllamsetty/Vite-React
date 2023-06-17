import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Colors from './Component/Colors'
import CountryList from './Component/CountryList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CountryList/>
      </div>
    </>
  )
}

export default App
