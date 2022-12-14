import { useEffect, useState } from "react";
import AddToPokedex from "../api/AddToPokedex";
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { getAll } from "../api/Fetch";

function PrintAll(){
    const [ pokemons, setPokemons ] = useState([]);
}


function random(pokemon){
    const chance = pokemon.chance;
    const foo = Math.random() * 100;
    if (foo < chance){
        AddToPokedex(pokemon);
        <Alert key="sucess" variant="sucess">
          Captured !
        </Alert>;
    }else{
        <Alert key="danger" variant="danger">
            failed !
        </Alert>;
    }
    
}




function PrintAll(){
    const [ pokemons, setPokemons ] = useState([]);

    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="pokemon-list">
        <SortInPokepo />
        <div>
        {
            pokemons.map((pokemon,key) =>{
                return <div key={key} className="bloc-pokemon">
                        <img src={pokemon.image} />
                        <h2>{pokemon.name}</h2>
                        <Button variant ="success" onClick={random(pokemon)}>Capturer !</Button>
                </div>
            })
        }
        </div>
    </div>;
}

export default PrintAll