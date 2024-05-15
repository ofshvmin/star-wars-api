import { useState } from 'react'

import './App.css'

import { getAllStarships } from './services/sw-api'

function App() {
  const [starships, setStarships] = useState([])

  async function helper () {
    const APIstarships = await getAllStarships()
    setStarships(APIstarships)
  }

  helper()

  return (
    <>

    </>
  )
}

export default App
