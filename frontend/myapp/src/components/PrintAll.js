import { useEffect, useState } from "react";
import AddToPokedex from "../api/AddToPokedex";
import { getAll } from "../api/Fetch";
import { Button } from 'react-bootstrap';



function PrintAll(){
    const [ pokemons, setPokemons ] = useState([]);
    

    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="pokemon-list">
        <div>
        {
            pokemons.map((pokemon,key) =>{
                return <div key={key} className="bloc-pokemon">
                    <img src={pokemon.image} />
                    <h2>{pokemon.name}</h2>
                    <Button variant ="success" onClick={()=>AddToPokedex(pokemon)}>Capturer !</Button>
                </div>
            })
        }
        </div>
    </div>;
}

export default PrintAll;