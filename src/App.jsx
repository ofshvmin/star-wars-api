import { useState } from 'react'

import './App.css'

import { index } from './services/sw-api'

function App() {
  const [starships, setStarships] = useState([])


  //test of service function to call api
  //api is currently down -- resume test at later date
  index()


  return (
    <>

    </>
  )
}

export default App
