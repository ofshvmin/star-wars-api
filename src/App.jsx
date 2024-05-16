// npm modules
import { useEffect, useState } from 'react'

//css
import './App.css'

//components
import StarshipCard from './components/StarshipCard'

//services
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
    <main className='list'>

      <ul>
      {starships.map((ship, idx) => 
        
        <StarshipCard 
        key={idx}
        ship={ship}
        />
      )}
      
      </ul>
    </main>
    
  )
}


export default App
