import { useEffect, useState } from "react";
import { getAll } from "../api/Fetch";
import Button from 'react-bootstrap/Button';
import AbsoluteRemove from "../api/AbsoluteRemove";
import {ModifForm} from "./ModifForm"
import { AddForm} from "./AddAPokepo";




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
                    <br></br>
                    <img id="imageu" src={pokemon.image} />
                    <br></br>
                    <br></br>
                    <h2>{pokemon.name}</h2>
                    <br></br>
                    <p><span id="adminp">{pokemon.parti}</span></p>
                    <br></br>
                    <Button variant ="danger" onClick={()=>AbsoluteRemove(pokemon)}>supprimer</Button>
                    <ModifForm pokemon={pokemon} />
                </div>
            })
        }
        </div>
        <h2>Add a new one ?</h2>
        <AddForm />
    </div>;
}

export default PrintAdmin;



