async function index () {
  try {
    let starships = []
    let next = 'https://swapi.dev/api/starships'
    while (next) {
      const swApiResponse = await fetch(next)     
      const apiData = await swApiResponse.json()
      starships = [...starships, ...apiData.results]
        console.log(starships)
      next = apiData.next
      console.log(next)
    }
    return starships
  } catch(err) {
    console.log(err)
  }
}

export {
  index 
}