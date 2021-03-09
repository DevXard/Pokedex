import "./Pokecard.css"

const Pokecard = ({ id, name, type, base_experience}) => {
    let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div id="Pokecard-card">
            <h4 className="Pokecard-name">{name}</h4>
            <img src={img} alt="" />
            <div id="Pokecard-info">
                <p>Type: {type} <br/> EXP: {base_experience}</p>
            </div>
        </div>
    )  
}

export default Pokecard