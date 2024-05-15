import { useEffect, useState } from 'react'

import './App.css'

import * as swapiService from './services/sw-api'

function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const data = await swapiService.index()
      setStarships(data)
    }
  fetchAllStarships()
  }, []) 
  
  
  return (
    <>

    </>
  )
}


export default App
