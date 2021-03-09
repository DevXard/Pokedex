import Pokecard from "./Pokecard"
import "./Pokedex.css"

const Pokedex = (props) => {
    console.log(props.cards)
    return(
        <>
            <h1 id="Pokedex-header">Pokedex</h1>
            <div id="Pokedex">{props.cards.map(card => <Pokecard key={card.id} id={card.id} name={card.name} type={card.type} base_experience={card.base_experience} />)}</div>
        </>
    )
}

export default Pokedex;