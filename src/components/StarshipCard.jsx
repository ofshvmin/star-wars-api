const StarshipCard = (props) => {
  return (  
    <li>
      <section>  
        <h3>
        {props.ship.name}
        </h3>
      </section>
    </li>
  )
}

export default StarshipCard
