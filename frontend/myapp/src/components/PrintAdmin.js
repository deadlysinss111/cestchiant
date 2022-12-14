import { useEffect, useState } from "react";
import { getAll } from "../api/Fetch";
import Button from 'react-bootstrap/Button';
import { TestForm } from "./AddAPokepo";
import AbsoluteRemove from "../api/AbsoluteRemove";
import {ModifForm} from "./ModifForm"




function PrintAdmin(){
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
                    <p>{pokemon.parti}</p>
                    <Button variant ="danger" onClick={()=>AbsoluteRemove(pokemon)}>supprimer</Button>
                    <ModifForm pokemon={pokemon} />
                </div>
            })
        }
        </div>
        <h2>Add a new one ?</h2>
        <TestForm />
    </div>;
}

export default PrintAdmin;



