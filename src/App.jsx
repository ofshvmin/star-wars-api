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
  
  // console.log(starships)
  

//current api data needs to be massaged.  
  //need to make sure we're retrieving all pages
  //pass only the results to state as starships

  return (
    <ul>
     {/* {starships.map(ship =>  */}

      <StarshipCard />
     {/* )} */}
    
    </ul>
    
  )
}


export default App
