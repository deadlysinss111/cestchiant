import { useEffect, useState } from "react";
import RemoveFromPokedex from "../api/RemoveFromPokedex";
import { getOwned } from "../api/FetchOwned";
import { Button } from "react-bootstrap";


function PrintOwned(){
    const [ pokemons, setPokemons ] = useState([]);
    const [ count, setCount ] = useState(0);
    
    useEffect(() => {
        const pokemonsFetched = getOwned();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);

    return <div className="pokemon-list">
        <div>
        {
            pokemons.map((pokemon,key) =>{
                return <div key={key} className="bloc-pokemon">
                    <br></br>
                    <img id="imageu" src={pokemon.image} />
                    <br></br>
                    <br></br>
                    <h2>{pokemon.name}</h2>
                    <br></br>
                    <p>{pokemon.parti}</p>
                    <br></br>
                    <Button variant="warning" onClick={()=>{
                        RemoveFromPokedex(pokemon.name);
                        setCount(count+1)
                    }}>relâcher !</Button>
                </div>
            })
        }
        </div>
    </div>;
}

export default PrintOwned;