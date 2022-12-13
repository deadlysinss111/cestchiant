import { useEffect, useState } from "react";
import AddToPokedex from "../api/AddToPokedex";
import { Button } from 'react-bootstrap';
import { getSorted } from "../api/FetchSorted";
import { SortForm } from "./SortForm";




function PrintSorted(props){
    const [ pokemons, setPokemons ] = useState([]);
    console.log("rr");

    useEffect(() => {
        console.log(props.parti)
        const pokemonsFetched = getSorted(props.parti);
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="pokemon-list">
        <SortForm />
        <div>
        {
            pokemons.map((pokemon,key) =>{
                return <div key={key} className="bloc-pokemon">
                    <img src={pokemon.image} />
                    <h2>{pokemon.name}</h2>
                    <p>{pokemon.parti}</p>
                    <Button variant ="success" onClick={()=>AddToPokedex(pokemon)}>Capturer !</Button>
                </div>
            })
        }
        </div>
    </div>;
}

export default PrintSorted;